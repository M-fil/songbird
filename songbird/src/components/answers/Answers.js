import './answers.scss';
import React from 'react';
import PropTypes, { objectOf } from 'prop-types';

import BirdCard from '../bird-card/BirdCard';
import AnswerBirdCard from '../answer-bird-card/AnswerBirdCard';
import {
  mainBlockConstants,
} from '../../constants/constants';

const {
  NO_ASNWER_TEXT,
} = mainBlockConstants;

function Answers({
  birds,
  activeBirdObject,
  correctBirdId,
}) {
  return (
    <div className="answers">
      <div className="answers__list game-block">
        {birds.map((bird) => (
          <AnswerBirdCard
            key={`${bird.name}-${bird.id}`}
            id={`${bird.name}-${bird.id}`}
            imageURL={bird.image}
            name={bird.name}
            isClicked={bird.isClicked}
            correctBirdId={correctBirdId}
          />
        ))}
      </div>
      <div className="answers__active-answer game-block">
        {activeBirdObject ? (
          <BirdCard
            id={`${activeBirdObject.name}-${activeBirdObject.id}`}
            imageURL={activeBirdObject.image}
            name={activeBirdObject.name}
            soundURL={activeBirdObject.audio}
            description={activeBirdObject.description}
            species={activeBirdObject.species}
          />
        ) : <div className="asnwers__no-answer-text">{NO_ASNWER_TEXT}</div>}
      </div>
    </div>
  );
}

const birdObjectPropType = PropTypes.oneOfType([PropTypes.string, PropTypes.number]);

Answers.propTypes = {
  birds: PropTypes.arrayOf(objectOf(birdObjectPropType)).isRequired,
  activeBirdObject: PropTypes.objectOf(birdObjectPropType).isRequired,
  correctBirdId: PropTypes.number.isRequired,
};

export default Answers;
