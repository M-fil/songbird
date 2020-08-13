import './custom.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import JPlayer, { initializeOptions, actions } from 'react-jplayer'
import CommonAudioPlayer from './CommonAudioPlayer';
import usePlayer from './usePlayer';

const defaultOptions = {
  id: 'CurrentAudioPlayer',
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

const CurrentAudioPlayer = ({ soundURL, isGuessed, dispatch }) => {
  usePlayer(defaultOptions, soundURL, isGuessed, dispatch);

  return (
  <JPlayer id={defaultOptions.id} className="jp-sleek">
    <CommonAudioPlayer />
  </JPlayer>);
};

const mapState = (state) => ({
  ...state,
  sources: state.jPlayers.CurrentAudioPlayer?.sources,
});

export default connect(mapState)(CurrentAudioPlayer);
