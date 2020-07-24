import React from 'react';
import PropTypes from 'prop-types';
import {
  mainBlockConstants,
  urls,
} from '../../constants/constants';

const {
  AUDIO_IS_NOT_SUPPORTED,
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
  isCurrentBird,
}) {
  const currentBirdCardClassName = isCurrentBird ? ' bird-card_current' : '';

  return (
    <div
      className={`bird-card${currentBirdCardClassName}`}
      data-bird-id={id}
    >
      <div
        className="bird-card__image"
        style={{
          background: `url(${imageURL})`,
        }}
      />
      <div className="bird-card__main-info">
        <div className="bird-card__name">{name}</div>
        {!isCurrentBird && <div className="bird-card__species">{species}</div>}
        <div className="bird-card__audio-block">
          <audio controls>
            <track kind="captions" />
            <source src={soundURL} type="audio/mpeg" />
            {AUDIO_IS_NOT_SUPPORTED}
          </audio>
        </div>
      </div>
      {!isCurrentBird && <div className="bird-card__description">{description}</div>}
    </div>
  );
}

BirdCard.propTypes = {
  birdId: PropTypes.string.isRequired,
  birdImageURL: PropTypes.string,
  birdName: PropTypes.string.isRequired,
  birdSoundURL: PropTypes.string.isRequired,
  description: PropTypes.string,
  species: PropTypes.string,
  isCurrentBird: PropTypes.bool,
};

export default BirdCard;
