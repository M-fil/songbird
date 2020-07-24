import './navigation.scss';
import React from 'react';

import {
  listOfBirds,
} from '../../constants/constants';

function Navigation() {
  return (
    <div className="header__bird-types">
      {Object.values(listOfBirds)
        .map((birdType) => (
          <div className="header__bird-type">{birdType}</div>
        ))}
    </div>
  );
}

export default Navigation;
