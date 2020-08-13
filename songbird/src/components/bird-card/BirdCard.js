import './bird-card.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {
  mainBlockConstants,
  urls,
} from '../../constants/constants';
import AnswerAudioPlayer from '../audio-player/AnswerAudioPlayer';
import CurrentAudioPlayer from '../audio-player/CurrentAudioPlayer';

const {
  UNGUESSED_BIRD_NAME_TEXT,
} = mainBlockConstants;

const {
  DEFAUL_BIRD_IMAGE_URL,
} = urls;

function BirdCard({
  id,
  imageURL = DEFAUL_BIRD_IMAGE_URL,
  name,
  soundURL,
  description = '',
  species = '',
  isCurrentBird = false,
  isGuessed = false,
}) {
  const currentBirdCardClassName = isCurrentBird ? ' bird-card_current game-block' : '';

  return (
    <div
      className={`bird-card${currentBirdCardClassName}`}
      data-bird-id={`${name}-${id}`}
    >
      <div className="bird-card-short-info">
      <div className="bird-card__main">
        <div className="bird-card__short-info">
          <img
            className="bird-card__image"
            src={(isGuessed || !isCurrentBird) ? imageURL : DEFAUL_BIRD_IMAGE_URL}
            alt={name || ''}
          />
          <div className="bird-card-short-info__description">
            {!isCurrentBird && <h3 className="bird-card__name">{name}</h3>}
            {!isCurrentBird && <div className="bird-card__species">{species}</div>}
          </div>
        </div>
        {!isCurrentBird && (
            <CurrentAudioPlayer
              soundURL={soundURL}
              isGuessed={isGuessed}
            />
        )}
      </div>
      </div>
      <div className="bird-card__main-info">
        {isCurrentBird && (
        <h3 className="bird-card__name">
          {isGuessed ? name : UNGUESSED_BIRD_NAME_TEXT()}
        </h3>
        )}
        {isCurrentBird && (
          <AnswerAudioPlayer
            soundURL={soundURL}
            isGuessed={isGuessed}
          />
        )}
      </div>
      {!isCurrentBird && (
      <div className="bird-card__description">
        {description}
      </div>
      )}
    </div>
  );
}

BirdCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  name: PropTypes.string.isRequired,
  soundURL: PropTypes.string.isRequired,
  description: PropTypes.string,
  species: PropTypes.string,
  isCurrentBird: PropTypes.bool,
  isGuessed: PropTypes.bool,
};

BirdCard.defaultProps = {
  imageURL: DEFAUL_BIRD_IMAGE_URL,
  description: '',
  species: '',
  isCurrentBird: false,
  isGuessed: false,
};

export default BirdCard;
