// quick reference for what a note can do
// export const NotesConstants = {
//   KEY_PRESSED: "KEY_PRESSED",
//   KEY_RELEASED: "KEY_RELEASED",
//   SELECT_CHORD: "SELECT_CHORD",
//   PLAY_CHORD: "PLAY_CHORD"
// }

export const keyPressed = key => ({
  type: "KEY_PRESSED",
  key
});

export const keyReleased = key => ({
  type: "KEY_RELEASED",
  key
});

export const selectChord = (majmin, letter) => ({
  type: "SELECT_CHORD",
  majmin,
  letter
});

export const playChord = () => ({
  type: "PLAY_CHORD",
});

export const setNotes = notes => ({
  type: "SET_NOTES",
  notes
});
