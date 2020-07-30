import React, {
  useEffect, useCallback, useReducer,
} from 'react';
import { useQuery } from 'react-query';

import initialState from '../../reducer/initialState';
import reducer from '../../reducer/reducer';
import actionTypes from '../../reducer/actions';

import {
  mainBlockConstants,
  urls,
  resultsBlockConstants,
} from '../../constants/constants';
import { getRandomBirds } from '../../utils/random';
import getBirdsInfo from '../../service/service';
import playAudio from '../../utils/audio';

import Header from '../header/Header';
import BirdCard from '../bird-card/BirdCard';
import Answers from '../answers/Answers';
import Loading from '../loading/Loading';
import ErrorBlock from '../error-block/ErrorBlock';
import ResultsBlock from '../results/ResultsBlock';

const {
  NEXT_BUTTON_TEXT,
} = mainBlockConstants;

const {
  INCREMENT_BIRD_INDEX,
  INCREMENT_QUESTION_INDICATOR,
  RESET_QUESTION_INDICATOR,
  RESET_BIRD_INDEX,
  RESET_MAIN_SCORE,
  UPDATE_MAIN_SCORE,
  UPDATE_BIRDS_LIST,
  UPDATE_BIRD_ANSWERS,
  UPDATE_EVENT_DATA,
  CHANGE_IS_CLICKED_OF_BIRD_ANSWER,
  DECREMENT_CURRENT_SCORE,
  RESET_CURRENT_SCORE,
  GET_ALL_DATA,
  FETCH_ERROR,
  FETCH_LOADING,
  SET_IS_GAME_ENDED,
} = actionTypes;

const {
  ERROR_SOUND_PATH,
  CORRECT_SOUND_PATH,
} = urls;

const {
  TYPES_OF_BIRDS_NUMBER,
} = resultsBlockConstants;

function App() {
  const audio = new Audio();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      dispatch({ type: FETCH_LOADING });
      try {
        const data = await getBirdsInfo();
        if (!didCancel) {
          const { currentQuestionIndicator } = state;
          dispatch({ type: GET_ALL_DATA, payload: data });
          dispatch({ type: UPDATE_BIRDS_LIST, payload: { birds: getRandomBirds(data) } });
          dispatch({ type: UPDATE_BIRD_ANSWERS, payload: data[currentQuestionIndicator] });
        }
      } catch (error) {
        if (!didCancel) {
          dispatch({ type: FETCH_ERROR, payload: error.message });
        }
      }
    };

    fetchData();
    return () => {
      didCancel = true;
    };
  }, []);

  const answerEventClick = (event) => {
    const target = event.target.closest('[data-answer-id]');
    const answersHTML = document.querySelectorAll('[data-answer-id]');
    const elementWithExtraClass = Array.from(answersHTML)
      .find((item) => item.classList.contains('answer-bird-card_correct'));

    if (target && !elementWithExtraClass && !target.classList.contains('answer-bird-card_wrong')) {
      const { birds, currentBirdIndex } = state;
      const clickedId = target.dataset.answerId;
      const correctId = `${birds[currentBirdIndex].name}-${birds[currentBirdIndex].id}`;
      const activeBirdObject = state.allData
        .reduce((acc, cur) => acc.concat(cur))
        .find((bird) => `${bird.name}-${bird.id}` === clickedId);

      if (clickedId === correctId) {
        playAudio(CORRECT_SOUND_PATH, audio);
        dispatch({
          type: UPDATE_EVENT_DATA,
          payload: { clickedId, activeBirdObject },
        });
        dispatch({ type: UPDATE_MAIN_SCORE });
        dispatch({ type: RESET_CURRENT_SCORE });
      } else {
        playAudio(ERROR_SOUND_PATH, audio);
        dispatch({
          type: UPDATE_EVENT_DATA,
          payload: { clickedId, activeBirdObject },
        });
        dispatch({ type: DECREMENT_CURRENT_SCORE });
      }

      dispatch({ type: CHANGE_IS_CLICKED_OF_BIRD_ANSWER });
    }
  };

  const nextLevelHandler = () => {
    dispatch({ type: INCREMENT_QUESTION_INDICATOR });

    if (state.allData && state.allData[state.currentQuestionIndicator + 1]) {
      dispatch({ type: INCREMENT_BIRD_INDEX });
      dispatch({
        type: UPDATE_BIRD_ANSWERS,
        payload: state.allData[state.currentQuestionIndicator + 1],
      });
      dispatch({
        type: UPDATE_EVENT_DATA,
        payload: { clickedId: '', activeBirdObject: null },
      });
    }
  };

  const playAgainHandler = () => {
    dispatch({ type: RESET_BIRD_INDEX });
    dispatch({ type: RESET_CURRENT_SCORE });
    dispatch({ type: RESET_QUESTION_INDICATOR });
    dispatch({ type: RESET_MAIN_SCORE });

    dispatch({ type: UPDATE_BIRDS_LIST, payload: { birds: getRandomBirds(state.allData) } });
    dispatch({ type: UPDATE_BIRD_ANSWERS, payload: state.allData[0] });
    dispatch({
      type: UPDATE_EVENT_DATA,
      payload: { clickedId: '', activeBirdObject: null },
    });
  };

  const {
    birdAnswers,
    birds,
    currentBirdIndex,
    mainScore,
    currentQuestionIndicator,
    eventData,
    status,
  } = state;
  const isGuessed = ((birds && birds[currentBirdIndex])
    && (`${birds[currentBirdIndex].name}-${birds[currentBirdIndex].id}`) === eventData.clickedId);

  if (status.isError) {
    return <ErrorBlock errorMessage={status.errorMessage} />;
  }

  return (
    (status.isLoading && !status.isError) ? <Loading />
      : (
        <div id="game-wrapper">
          {currentQuestionIndicator === (TYPES_OF_BIRDS_NUMBER)
        && (
        <ResultsBlock
          score={mainScore}
          playAgainHandler={playAgainHandler}
          birds={birds}
          isZeroMistakes={mainScore === resultsBlockConstants.MAX_SCORE_FOR_GAME()}
        />
        )}
          <Header
            score={mainScore}
            currentQuestionIndicator={currentQuestionIndicator}
          />
          {birds.length && (
          <main id="main-container">
            <BirdCard
              id={`${birds[currentBirdIndex].id}-${birds[currentBirdIndex].name}`}
              imageURL={birds[currentBirdIndex].image}
              name={birds[currentBirdIndex].name}
              soundURL={birds[currentBirdIndex].audio}
              isGuessed={!!isGuessed}
              isCurrentBird
            />
            <Answers
              birdAnswers={birdAnswers}
              activeBirdObject={eventData.activeBirdObject}
              correctBirdId={`${birds[currentBirdIndex].name}-${birds[currentBirdIndex].id}`}
              answerEventClick={answerEventClick}
            />
            <button
              type="button"
              id="next-bird-button"
              className="answers__next-bird-button"
              onClick={nextLevelHandler}
              disabled={!isGuessed}
            >
              {NEXT_BUTTON_TEXT}
            </button>
          </main>
          )}
        </div>
      )
  );
}

export default App;
