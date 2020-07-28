import './results-block.scss';

import React, { useEffect } from 'react';
import PropTypes, { arrayOf } from 'prop-types';
import {
  resultsBlockConstants,
  urls,
} from '../../constants/constants';
import playAudio from '../../utils/audio';

import CertifacateBlock from './CertifacateBlock';

const {
  PLAY_AGAIN_BUTTON_TEXT,
  FINISH_ROUND_TEXT,
  CERTIFICATE_DATA_TEXT,
  ZERO_MISTAKES_TEXT,
} = resultsBlockConstants;

const {
  WIN_SOUND_PATH,
} = urls;

function ResultsBlock({
  score,
  playAgainHandler,
  birds = null,
  isZeroMistakes = false,
}) {
  useEffect(() => {
    playAudio(WIN_SOUND_PATH, new Audio());
  }, []);

  const birdsList = birds.map((bird, index) => `${index + 1}) ${bird.name}`).join('\n');
  const certificateText = CERTIFICATE_DATA_TEXT(score, birdsList);

  return (
    <div className="result-block-overflow">
      <div className="results-block">
        <div className="results-block__text">
          {FINISH_ROUND_TEXT}
          {isZeroMistakes ? <div>{ZERO_MISTAKES_TEXT}</div> : ''}
        </div>
        {isZeroMistakes && <CertifacateBlock certificateText={certificateText} />}
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
  birds: arrayOf(PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
  playAgainHandler: PropTypes.func.isRequired,
  isZeroMistakes: PropTypes.bool,
};

ResultsBlock.defaultProps = {
  isZeroMistakes: false,
  birds: null,
};

export default ResultsBlock;
