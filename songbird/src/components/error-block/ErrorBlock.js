import './error-block.scss';

import React from 'react';
import PropTypes from 'prop-types';

function ErrorBlock({ errorMessage }) {
  return (
    <div className="error-block">
      {`Error: ${errorMessage}`}
    </div>
  );
}

ErrorBlock.propTypes = {
  errorMessage: PropTypes.string.isRequired,
};

export default ErrorBlock;
