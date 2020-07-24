import './answers-list.scss'
import React from 'react';

import BirdCard from '../bird-card/BirdCard';
import mainBlockConstants from '../../constants/constants';

const {
  NEXT_BUTTON_TEXT,
  NO_ASNWER_TEXT,
} = mainBlockConstants;

function Answers({
  birds,
  activeBirdObject,
  correctBirdId,
  nextBirdCardHandler
}) {
  return (
    <div className="answers">
      <div className="answers__list">
        {birds.map((bird) => <BirdCard
          id={bird.id}
          imageURL={bird.image}
          name={bird.name}
          soundURL={bird.audio}
          description={bird.description}
          species={bird.species}
        />)}
      </div>
      <div className="answers__active-answer">
        {activeBirdObject ? <BirdCard
          id={activeBirdObject.id}
          imageURL={activeBirdObject.image}
          name={activeBirdObject.name}
          soundURL={activeBirdObject.audio}
          description={activeBirdObject.description}
          species={activeBirdObject.species}
        /> : <div className="asnwers__no-answer-text">{NO_ASNWER_TEXT}</div>}
      </div>
      <button
        type="button"
        className="next-bird-button"
        onClick={nextBirdCardHandler}
        disabled={activeBirdObject !== correctBirdId}
      >
        {NEXT_BUTTON_TEXT}
      </button>
    </div>
  )
}

export default Answers;
