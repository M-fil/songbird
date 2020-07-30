import './error-block.scss';

import React from 'react';
import PropTypes from 'prop-types';

import { errorBlockConstants } from '../../constants/constants';

const {
  ERROR_TEXT,
  ERROR_FIX_MESSAGE,
} = errorBlockConstants;

function ErrorBlock({ errorMessage }) {
  return (
    <div className="error-block">
      <div className="error-block__message">
        {`${ERROR_TEXT} ${errorMessage}`}
        <p>{ERROR_FIX_MESSAGE}</p>
      </div>
      <div className="error-block__image" />
    </div>
  );
}

ErrorBlock.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorBlock;
