import './audio-player.scss';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { mainBlockConstants } from '../../constants/constants';

const {
  AUDIO_IS_NOT_SUPPORTED,
} = mainBlockConstants;

function Player({ soundURL, isGuessed }) {
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

Player.propTypes = {
  soundURL: PropTypes.string.isRequired,
  isGuessed: PropTypes.bool,
};

Player.defaultProps = {
  isGuessed: false,
};

export default Player;
