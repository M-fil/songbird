import './loading.scss';
import React from 'react';

import { loadingConstants } from '../../constants/constants';

const {
  NUMBER_OF_CIRCLES,
} = loadingConstants;

function Loading() {
  return (
    <div className="loading__overflow">
      <div className="sk-fading-circle">
        {
          Array.from({ length: NUMBER_OF_CIRCLES }).map((_, index) => (
            <div className={`sk-circle sk-circle-${index + 1}`} />
          ))
        }
      </div>
    </div>
  );
}

export default Loading;
