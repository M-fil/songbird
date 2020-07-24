import './results-block.scss';

import React from 'react';
import PropTypes from 'prop-types';
import {
  resultsBlockConstants,
} from '../../constants/constants';

const {
  SCORE_TEXT,
  PLAY_AGAIN_BUTTON_TEXT,
} = resultsBlockConstants;

function ResultsBlock({ score }) {
  return (
    <div className="results-block">
      <div className="results-block__score">
        {`${SCORE_TEXT(score).bind(resultsBlockConstants)}`}
      </div>
      <button
        type="button"
        id="play-again-button"
        className="results-block__play-again-button"
      >
        {PLAY_AGAIN_BUTTON_TEXT}
      </button>
    </div>
  );
}

ResultsBlock.propTypes = {
  score: PropTypes.number.isRequired,
};

export default ResultsBlock;
