import './header.scss';

import React from 'react';
import {
  headerConstants,
} from '../../constants/constants';

function Header({ score }) {
  return (
    <header className="header">
      <div className="header__logo-block">
        <div className="header__logo"></div>
        <div className="header__score"></div>
      </div>
    </header>
  )
}

export default Header;
