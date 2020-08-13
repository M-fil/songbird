import { useEffect } from 'react';
import { actions } from 'react-jplayer';

const usePlayer = (defaultOptions, soundURL, isGuessed, dispatch) => {
  useEffect(() => {
    dispatch(actions.setOption(defaultOptions.id, 'media', {
      ...defaultOptions.media,
      sources: {
        mp3: soundURL,
      },
    }));
  }, [soundURL]);

  useEffect(() => {
    if (isGuessed) {
      dispatch(actions.pause(defaultOptions.id, 0))
    }
  }, [isGuessed]);
};

export default usePlayer;
