import * as TONE_UTILS from '../util/tones';
import * as CHORD_UTILS from '../util/chords';
import * as ACTIONS from '../actions/note_actions';
import $ from 'jquery';
import merge from 'lodash/merge';

const defaultState = {
  playing: [],
  chord: [[]],
  newchordvar: false
};

const chordEquals = (arr1, arr2) => {
  if(arr1.length !== arr2.length){
    return false;
  }
  let arr1sort = arr1.sort();
  let arr2sort = arr2.sort();
  for(let i = 0; i < arr1.length; i++){
    if(arr1sort[i] !== arr2sort[i]){
      return false;
    }
  }
  return true
}

const notesReducer = (state = defaultState, action) => {
  let newState = merge({}, state);
  switch(action.type){
    case "KEY_PRESSED":
      newState.newchordvar = false;
      if((state.playing.includes(action.key) === false) && (TONE_UTILS.KEY_MAP[action.key] != undefined)){
        newState.playing.push(action.key);
      }
      if(chordEquals(newState.playing, state.chord)){
        $(".message").html("You got it! Pick another chord!");
        newState.chord = [];
      }
      return newState;
    case "KEY_RELEASED":
      newState.newchordvar = false;
      let index = state.playing.indexOf(action.key);
      if (index > -1) {
        newState.playing.splice(index, 1);
      }
      if(chordEquals(newState.playing, state.chord)){
        $(".message").html("You got it! Pick another chord!");
        newState.chord = [];
      }
      return newState;
    case "SELECT_CHORD":
      newState.chord = CHORD_UTILS[action.majmin][action.letter];
      newState.newchordvar = true;
      return newState;
    default:
      return newState;
  }
};

export default notesReducer;