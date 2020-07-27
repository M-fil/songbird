import './results-block.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {
  resultsBlockConstants,
  urls,
} from '../../constants/constants';
import playAudio from '../../utils/audio';

const {
  PLAY_AGAIN_BUTTON_TEXT,
  FINISH_ROUND_TEXT,
} = resultsBlockConstants;

const {
  WIN_SOUND_PATH,
} = urls;

function ResultsBlock({ score, playAgainHandler }) {
  playAudio(WIN_SOUND_PATH, new Audio());
  return (
    <div className="result-block-overflow">
      <div className="results-block">
        <div className="results-block__text">
          {FINISH_ROUND_TEXT}
        </div>
        <div className="results-block__score">
          {`${resultsBlockConstants.SCORE_TEXT(score)}`}
        </div>
        <div className="result-block__image" />
        <button
          type="button"
          id="play-again-button"
          className="results-block__play-again-button"
          onClick={playAgainHandler}
        >
          {PLAY_AGAIN_BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
}

ResultsBlock.propTypes = {
  score: PropTypes.number.isRequired,
  playAgainHandler: PropTypes.func.isRequired,
};

export default ResultsBlock;
