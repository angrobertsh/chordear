import React from 'react';

const SharpKey = ({ pressed, scale, keyb = "" }) => (
  <div className={pressed ? `sharp-key pressed` : 'sharp-key'} id={scale}>
    <div className="keyboard-letter">{keyb}</div>
    <div className="scale-value">{scale}</div>
  </div>
);

export default SharpKey;
