import React from 'react';
import KeyboardContainer from './keyboard/keyboard_container';
import ChordselectContainer from './chordselect/chordselect_container';

const App = () => (
  <div className='app'>
    <KeyboardContainer />
    <ChordselectContainer />
  </div>
);

export default App;
