# Chordear
  See Chordear live [here!](https://github.com/angrobertsh/chordear/blob/master/lib/index.html)

## Instructions
  Chordear is here to help people train their musical ear by playing chords and having you play them back! Press keys in the asdf row to play white notes, and the qwerty row to play black notes. When you strike the correct chord, you'll get a point. Learn specific chords by selecting them on the left, or try out your luck with the shuffle button. As you advance and attune your ear, you can take away the fingering, and even the chord's name to see if you can figure it out, just by ear!

## Technologies
  This website was made with javascript coupled with the built-in Web Audio API innate in most browsers.

## Implementation details
  Notes are played with javascript event listeners onKeyUp and onKeyDown. These events manipulate an array of stored notes that are currently being played. To define success, a set array of notes defined by the chord is compared to the array of currently playing notes. If there's a match, the user succeeds and gets a point.

## Future features
  Chordear may someday expand to guitar fingering and notation, or other, strongly chord-based instruments.
