import React, { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <header></header>
      <main>
        <div className="current-bird-card"></div>
        <div className="answers">
          <div className="answers__list"></div>
          <div className="answers__active-answer"></div>
          <button className="next-bird-button">Next</button>
        </div>
      </main>
    </Fragment>
  )
}

export default App;
