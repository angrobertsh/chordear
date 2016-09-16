import React from 'react';

const NoteKey = ({ pressed, scale, keyb = "" }) => (
  <div className={pressed ? `note-key pressed` : 'note-key'}>
    <div className="keyboard-letter">{keyb}</div>
    <div className="scale-value">{scale}</div>
  </div>
);

export default NoteKey;
