import React from 'react';

import Header from '../header/Header';
import BirdCard from '../bird-card/BirdCard';

function App() {
  return (
    <>
      <Header />
      <main>
        <BirdCard
          birdImageURL=''
          birdName=''
          birdSoundURL=''
          isCurrentBird={true}
        />
        <div className="answers">
          <div className="answers__list" />
          <div className="answers__active-answer" />
          <button
            type="button"
            className="next-bird-button"
          >
            Next
          </button>
        </div>
      </main>
    </>
  );
}

export default App;
