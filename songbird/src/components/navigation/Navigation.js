import './navigation.scss';
import React from 'react';

import {
  listOfBirds,
} from '../../constants/constants';

function Navigation() {
  return (
    <div className="header__bird-types">
      {Object.keys(listOfBirds)
        .map((birdTypeKey) => (
          <div
            key={birdTypeKey}
            className="header__bird-type"
          >
            {listOfBirds[birdTypeKey]}
          </div>
        ))}
    </div>
  );
}

export default Navigation;
