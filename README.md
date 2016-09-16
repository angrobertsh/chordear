# CHORDEAR
  See CHORDEAR live [here!](https://github.com/angrobertsh/chordear/blob/master/lib/index.html)

## Instructions
  CHORDEAR is here to help people train their musical ear by playing chords and having you play them back! Press keys in the qwe row to play white notes, and the 123 row to play black notes. When you strike the correct chord, you'll get a point.

  ![Easy Mode](http://res.cloudinary.com/dujcpxlhk/image/upload/v1474014284/zhzb06n7d5pynn6gddsn.png)

  Learn specific chords by selecting them on the left, or try out your luck with the shuffle button. As you advance and attune your ear, you can take away the fingering, and even the chord's name to see if you can figure it out, just by ear!

  ![Hard Mode](http://res.cloudinary.com/dujcpxlhk/image/upload/v1474014399/nvulbizmnfdrxm7nycyw.png)

## Technologies
  This website was made with javascript coupled with the built-in Web Audio API innate in most browsers.

  Sounds are created with oscillator nodes using their built-in frequency properties to generate tones, with gain nodes to control volume.

  ```javascript
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const createOscillator = (freq) => {
    const osc = ctx.createOscillator();
    osc.type = "square";
    osc.frequency.value = freq;
    osc.detune.value = 0;
    osc.start(ctx.currentTime);
    return osc;
  };

  const createGainNode = () => {
    const gainNode = ctx.createGain();
    gainNode.gain.value = 0;
    gainNode.connect(ctx.destination);
    return gainNode;
  };
  ```

  Chords are hard-coded into the database as constants, and the shuffle button randomizes with Math.random() and Math.floor().

  State is maintained with React and a front-end Redux store.

  WARNING: Some keyboards unfortunately aren't wired to allow multiple inputs from specific keys at the same time. This means you may not be able to play certain chords :(

## Implementation details
  Notes are played with jQuery event listeners on('keyup') and on('keydown'). These events manipulate an array of stored notes that are currently being played. To define success, a set array of notes defined by the selected chord is compared to the array of currently playing notes. If there's a match, the user succeeds and gets a point.

## Future features
  Chordear may someday expand to guitar fingering and notation, or other, strongly chord-based instruments. There is also the possibility of refactoring the store by frequency instead of keyboard key to include more easily implementable inversions and chords with more than 3 notes.
