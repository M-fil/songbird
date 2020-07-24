import React, { Fragment } from 'react';

import Header from '../header/Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="current-bird-card" />
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
