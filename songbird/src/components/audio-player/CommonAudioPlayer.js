import React from 'react';
import {
  Gui, SeekBar, BufferBar,
  Audio, Mute, Play, PlayBar,
  VolumeBar, Duration, CurrentTime, BrowserUnsupported,
} from 'react-jplayer';

function CommonAudioPlayer() {
  return (
    <>
      <Audio />
      <Gui>
        <div className="jp-controls jp-icon-controls">
          <Play><i className="fa" /></Play>
          <div className="jp-progress">
            <SeekBar>
              <BufferBar />
              <PlayBar />
              <CurrentTime />
              <Duration />
            </SeekBar>
          </div>
          <div className="jp-volume-container">
            <Mute>
              <i className="fa" />
            </Mute>
            <div className="jp-volume-slider">
              <div className="jp-volume-bar-container">
                <VolumeBar />
              </div>
            </div>
          </div>
        </div>
        <BrowserUnsupported />
      </Gui>
    </>
  )
}

export default CommonAudioPlayer;
