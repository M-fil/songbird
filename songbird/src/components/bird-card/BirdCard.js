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
  birdImageURL = DEFAUL_BIRD_IMAGE_URL,
  birdName,
  birdSoundURL,
  isCurrentBird = false,
}) {
  const currentBirdCardClassName = isCurrentBird ? ' bird-card_current' : '';

  return (
    <div className={`bird-card${currentBirdCardClassName}`}>
      <div
        className="bird-card__image"
        style={{
          background: `url(${birdImageURL})`,
        }}
      />
      <div className="bird-card__main-info">
        <div className="bird-card__name">{birdName}</div>
        <div className="bird-card__audio-block">
          <audio controls>
            <track kind="captions"></track>
            <source src={birdSoundURL} type="audio/mpeg" />
            {AUDIO_IS_NOT_SUPPORTED}
          </audio>
        </div>
      </div>
    </div>
  );
}

BirdCard.propTypes = {
  birdImageURL: PropTypes.string,
  birdName: PropTypes.string.isRequired,
  birdSoundURL: PropTypes.string.isRequired,
}

export default BirdCard;
