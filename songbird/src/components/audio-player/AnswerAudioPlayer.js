import './custom.scss';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import JPlayer, { initializeOptions, actions } from 'react-jplayer'
import CommonAudioPlayer from './CommonAudioPlayer';

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

const AnswerAudioPlayer = ({ soundURL, dispatch }) => {
  useEffect(() => {
    dispatch(actions.setOption(defaultOptions.id, 'media', {
      ...defaultOptions.media,
      sources: {
        mp3: soundURL,
      },
    }));
  }, [soundURL]);

  return (
  <JPlayer id={defaultOptions.id} className="jp-sleek">
    <CommonAudioPlayer />
  </JPlayer>);
};

const mapState = (state) => ({
  ...state,
  sources: state.jPlayers.AudioPlayer.sources,
});

export default connect(mapState)(AnswerAudioPlayer);
