import './results-block.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {
  resultsBlockConstants,
} from '../../constants/constants';

const {
  PLAY_AGAIN_BUTTON_TEXT,
  FINISH_ROUND_TEXT,
} = resultsBlockConstants;

function ResultsBlock({ score }) {
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
        >
          {PLAY_AGAIN_BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
}

ResultsBlock.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ResultsBlock;
