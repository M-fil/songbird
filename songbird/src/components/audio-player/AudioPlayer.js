import 'react-h5-audio-player/lib/styles.css';
import './audio-player.scss';

import React, { useRef, useEffect } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import PropTypes from 'prop-types';

function Player({ soundURL, isGuessed = false }) {
  const audioRef = useRef();

  useEffect(() => {
    if (isGuessed) {
      audioRef.current.audio.current.pause();
    }
  }, [isGuessed]);

  return (
    <AudioPlayer
      autoPlay={false}
      src={soundURL}
      ref={audioRef}
    />
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
