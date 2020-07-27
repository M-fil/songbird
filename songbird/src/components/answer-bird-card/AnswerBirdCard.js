import './answer-bird-card.scss';

import React from 'react';
import PropTypes from 'prop-types';

function AnswerBirdCard({
  id, name, isClicked, correctBirdId,
}) {
  let colorIndicatorClassName = '';
  if (isClicked) {
    colorIndicatorClassName = ' answer-bird-card_wrong';
  }
  if (isClicked && id === correctBirdId) {
    colorIndicatorClassName = ' answer-bird-card_correct';
  }

  return (
    <div
      className={`answer-bird-card${colorIndicatorClassName}`}
      data-answer-id={id}
    >
      <div className="answer-bird-card__indicator-container">
        <div className="answer-bird-card__correctness-indicator" />
      </div>
      <div className="answer-bird-card__bird-name">
        {name}
      </div>
    </div>
  );
}

AnswerBirdCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isClicked: PropTypes.bool.isRequired,
  correctBirdId: PropTypes.string.isRequired,
};

export default AnswerBirdCard;
