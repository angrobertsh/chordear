import React from 'react';
import KeyboardContainer from './keyboard/keyboard_container';
import ChordselectContainer from './chordselect/chordselect_container';
import TutorialContainer from './tutorial/tutorial_container';

const App = () => (
  <div className='appcontainercontainer'>
    <TutorialContainer />
    <div className='appcontainer'>
      <div className='app'>
        <p className="message">Select or shuffle a chord!</p>
        <KeyboardContainer />
        <ChordselectContainer />
      </div>
    </div>
  </div>
);

export default App;
