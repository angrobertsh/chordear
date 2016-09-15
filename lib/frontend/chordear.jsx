import React from 'react';
import ReactDOM from 'react-dom';
import Note from './util/note';
import configureStore from './store/store';

window.Note = Note;

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.store = store;
  const rootdiv = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootdiv);
  // ReactDOM.render(<div>"Your bundle is working properly"</div>, rootdiv);
});
