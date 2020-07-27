import './navigation.scss';
import React from 'react';
import PropTypes from 'prop-types';

import {
  listOfBirds,
} from '../../constants/constants';

function Navigation({ currentQuestionIndicator }) {
  return (
    <div className="header__bird-types">
      {Object.keys(listOfBirds)
        .map((birdTypeKey, index) => {
          const activeClassName = currentQuestionIndicator === index
            ? ' header__bird-type_active' : '';
          return (
            <div
              key={birdTypeKey}
              className={`header__bird-type${activeClassName}`}
            >
              {listOfBirds[birdTypeKey]}
            </div>
          );
        })}
    </div>
  );
}

Navigation.propTypes = {
  currentQuestionIndicator: PropTypes.number.isRequired,
};

export default Navigation;
