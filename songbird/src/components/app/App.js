import React, {
  useEffect, useCallback, useState, useReducer,
} from 'react';
import { useQuery } from 'react-query';

import initialState from '../../reducer/initialState';
import reducer from '../../reducer/reducer';
import actionTypes from '../../reducer/actions';

import {
  fetchStatuses,
  mainBlockConstants,
} from '../../constants/constants';
import { getRandomBirds } from '../../utils/random';
import shuffle from '../../utils/shuffle';
import getBirdsInfo from '../../service/service';

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
  UPDATE_MAIN_SCORE,
  UPDATE_BIRDS_LIST,
  UPDATE_BIRD_ANSWERS,
  UPDATE_EVENT_DATA,
} = actionTypes;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchData = useCallback(getBirdsInfo, []);
  const { status, data, error } = useQuery('birds', fetchData, {
    retry: 1,
  });

  const answerEventClick = (event) => {
    const target = event.target.closest('[data-answer-id]');

    if (target) {
      const { birds, currentBirdIndex } = state;
      const clickedId = target.dataset.answerId;
      const correctId = `${birds[currentBirdIndex].name}-${birds[currentBirdIndex].id}`;
      console.log('clickedId', clickedId);
      const activeBirdObject = birds.find((bird) => `${bird.name}-${bird.id}` === clickedId);
      console.log('activeBirdObject', activeBirdObject);
      console.log('correctId', correctId);

      if (clickedId === correctId) {
        dispatch({
          type: UPDATE_EVENT_DATA,
          payload: { clickedId, activeBirdObject },
        });
        dispatch({ type: INCREMENT_QUESTION_INDICATOR });
      }
    }
  }

  useEffect(() => {
    if (data) {
      const { currentQuestionIndicator } = state;
      dispatch({ type: UPDATE_BIRDS_LIST, payload: { data, birds: getRandomBirds(data) } });
      dispatch({ type: UPDATE_BIRD_ANSWERS, payload: shuffle(data[currentQuestionIndicator]) });
    }
  }, [data]);

  if (status === fetchStatuses.LOADING) {
    return <Loading />;
  }

  if (status === fetchStatuses.ERROR) {
    return <ErrorBlock errorMessage={error.message} />;
  }

  const {
    birdAnswers,
    birds,
    currentBirdIndex,
    mainScore,
    currentQuestionIndicator,
    eventData,
  } = state;
  const isGuessed = (birds && birds[currentBirdIndex]) &&
    (`${birds[currentBirdIndex].name}-${birds[currentBirdIndex].id}`) === eventData.clickedId

  return (
    <div id="game-wrapper">
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
          isCurrentBird
          isGuessed={isGuessed}
        />
        <Answers
          birdAnswers={birdAnswers}
          activeBirdObject={eventData.activeBirdObject}
          correctBirdId={birds[currentBirdIndex]}
          answerEventClick={answerEventClick}
        />
        <button
          type="button"
          id="next-bird-button"
          className="answers__next-bird-button"
          onClick={() => {}}
          disabled={!isGuessed}
        >
          {NEXT_BUTTON_TEXT}
        </button>
      </main>
      )}
    </div>
  );
}

export default App;
