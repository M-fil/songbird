import React from 'react';
import PropTypes from 'prop-types';

import { resultsBlockConstants } from '../../constants/constants';

const {
  GET_CERTIFICATE_TEXT,
  DOWNLOAD_CERTIFICATE_BUTTON_TEXT,
} = resultsBlockConstants;

function CertifacateBlock({ certificateText }) {
  return (
    <div className="results-block__certificate">
      <div className="results-block__certificate-text">
        {GET_CERTIFICATE_TEXT}
      </div>
      <a
        href={`data:application/txt;charset=utf-8,${encodeURIComponent(certificateText)}`}
        className="results-block__download-certificate"
        onClick={() => {}}
        rel="noreferrer"
        target="_blank"
        download="birds-expert-certificate.txt"
      >
        {DOWNLOAD_CERTIFICATE_BUTTON_TEXT}
      </a>
    </div>
  );
}

CertifacateBlock.propTypes = {
  certificateText: PropTypes.string.isRequired,
};

export default CertifacateBlock;
