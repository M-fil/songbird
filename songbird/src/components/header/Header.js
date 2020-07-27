import './header.scss';

import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../navigation/Navigation';
import {
  headerConstants,
} from '../../constants/constants';

const {
  SCORE_TEXT,
} = headerConstants;

function Header({ score, currentQuestionIndicator }) {
  return (
    <header className="header">
      <div className="header__logo-block">
        <div className="header__logo" />
        <div className="header__score">
          {`${SCORE_TEXT}: ${score}`}
        </div>
      </div>
      <Navigation currentQuestionIndicator={currentQuestionIndicator} />
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  currentQuestionIndicator: PropTypes.number.isRequired,
};

export default Header;
