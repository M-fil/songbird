import './bird-card.scss';

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  mainBlockConstants,
  urls,
} from '../../constants/constants';

const {
  AUDIO_IS_NOT_SUPPORTED,
  UNGUESSED_BIRD_NAME_TEXT,
} = mainBlockConstants;

const {
  DEFAUL_BIRD_IMAGE_URL,
} = urls;

function AudioBlock({ soundURL, isGuessed }) {
  const audioRef = useRef(null);
  useEffect(() => {
    if (isGuessed) {
      audioRef.current.pause();
    }
    audioRef.current.pause();
    audioRef.current.load();
  }, [soundURL, isGuessed]);

  return (
    <audio
      ref={audioRef}
      className="bird-card__audio"
      controls
    >
      <track kind="captions" />
      <source src={soundURL} type="audio/mpeg" />
      {AUDIO_IS_NOT_SUPPORTED}
    </audio>
  );
}

function BirdCard({
  id,
  imageURL = DEFAUL_BIRD_IMAGE_URL,
  name,
  soundURL,
  description = '',
  species = '',
  isCurrentBird = false,
  isGuessed = false,
  isGameEnded,
}) {
  const currentBirdCardClassName = isCurrentBird ? ' bird-card_current game-block' : '';

  return (
    <div
      className={`bird-card${currentBirdCardClassName}`}
      data-bird-id={`${name}-${id}`}
    >
      <div className="bird-card-short-info">
        <div
          className="bird-card__image"
          style={{
            backgroundImage: `url(${(isGuessed || !isCurrentBird) ? imageURL : DEFAUL_BIRD_IMAGE_URL})`,
          }}
        />
        <div className="bird-card-short-info__description">
          <div className="bird-card-short-info__personal">
            {!isCurrentBird && <h3 className="bird-card__name">{name}</h3>}
            {!isCurrentBird && <div className="bird-card__species">{species}</div>}
          </div>
          {!isCurrentBird && (
            <AudioBlock
              soundURL={soundURL}
              isGuessed={isGuessed}
            />
          )}
        </div>
      </div>
      <div className="bird-card__main-info">
        {isCurrentBird && (
        <h3 className="bird-card__name">
          {!isGuessed ? name : UNGUESSED_BIRD_NAME_TEXT()}
        </h3>
        )}
        {isCurrentBird && (
          <AudioBlock
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

AudioBlock.propTypes = {
  soundURL: PropTypes.string.isRequired,
  isGuessed: PropTypes.bool.isRequired,
};

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
