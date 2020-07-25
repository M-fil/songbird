import React, { useEffect, useCallback, useState } from 'react';
import { useQuery } from 'react-query';

import {
  fetchStatuses,
  mainBlockConstants,
} from '../../constants/constants';
import {
  getRandomBirds,
} from '../../utils/random';
import getBirdsInfo from '../../service/service';

import Header from '../header/Header';
import BirdCard from '../bird-card/BirdCard';
import Answers from '../answers/Answers';
import Loading from '../loading/Loading';
import ErrorBlock from '../error-block/ErrorBlock';

const {
  NEXT_BUTTON_TEXT,
} = mainBlockConstants;

function App() {
  const [score, setScore] = useState(0);
  const [birdsForGame, setBirdsForGame] = useState([]);
  const [currentBirdIndex, setCurrentBirdIndex] = useState(0);
  const fetchData = useCallback(getBirdsInfo, []);
  const { status, data, error } = useQuery('birds', fetchData, {
    retry: 1,
  });

  useEffect(() => {
    if (data) {
      setBirdsForGame(getRandomBirds(data));
    }
  }, [data]);

  if (status === fetchStatuses.LOADING) {
    return <Loading />;
  }

  if (status === fetchStatuses.ERROR) {
    return <ErrorBlock errorMessage={error.message} />;
  }

  return (
    <div id="game-wrapper">
      <Header
        score={score}
      />
      {birdsForGame.length && (
      <main>
        <BirdCard
          id={`${birdsForGame[currentBirdIndex].id}-${birdsForGame[currentBirdIndex].name}`}
          imageURL={birdsForGame[currentBirdIndex].image}
          name={birdsForGame[currentBirdIndex].name}
          soundURL={birdsForGame[currentBirdIndex].audio}
          isCurrentBird
        />
        <Answers
          birds={birdsForGame}
          activeBirdObject={birdsForGame[currentBirdIndex]}
          correctBirdId={5}
        />
        <button
          type="button"
          id="next-bird-button"
          className="answers__next-bird-button"
          onClick={() => {}}
          disabled={false}
        >
          {NEXT_BUTTON_TEXT}
        </button>
      </main>
      )}
    </div>
  );
}

export default App;
