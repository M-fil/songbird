import './custom.scss';

import React from 'react';
import { connect } from 'react-redux';
import JPlayer, { initializeOptions } from 'react-jplayer';
import PropTypes from 'prop-types';

import CommonAudioPlayer from './CommonAudioPlayer';
import usePlayer from './usePlayer';

const defaultOptions = {
  id: 'AnswerAudioPlayer',
  keyEnabled: true,
  verticalVolume: true,
  media: {
    title: 'Bubble',
    artist: 'Miaow',
    sources: {},
    free: true,
  },
};

initializeOptions(defaultOptions);

const AnswerAudioPlayer = ({ soundURL, isGuessed, dispatch }) => {
  usePlayer(defaultOptions, soundURL, isGuessed, dispatch);

  return (
    <JPlayer id={defaultOptions.id} className="jp-sleek">
      <CommonAudioPlayer />
    </JPlayer>
  );
};

AnswerAudioPlayer.propTypes = {
  soundURL: PropTypes.string.isRequired,
  isGuessed: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapState = (state) => ({
  ...state,
  sources: state.jPlayers.AnswerAudioPlayer?.sources,
});

export default connect(mapState)(AnswerAudioPlayer);
