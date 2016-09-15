import React from 'react';

const SharpKey = ({ pressed, scale, keyb = "" }) => (
  <div className={pressed ? `sharp-key pressed` : 'sharp-key'}>
    <div className="scale-value">{scale}</div>
    <div className="keyboard-letter">{keyb}</div>
  </div>
);

export default SharpKey;
