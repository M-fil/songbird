import React from 'react';

import Header from '../header/Header';
import BirdCard from '../bird-card/BirdCard';
import Answers from '../answers/Answers';

function App() {
  return (
    <>
      <Header />
      <main>
        <BirdCard
          id=''
          imageURL=''
          name=''
          soundURL=''
          isCurrentBird={true}
        />
        <Answers />
      </main>
    </>
  );
}

export default App;
