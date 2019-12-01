import { connect } from 'react-redux';
import Keyboard from './keyboard';
import * as ACTIONS from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  playing: state.notes.playing,
  chord: state.notes.chord,
  notes: state.notes.notes || [],
});

const mapDispatchToProps = (dispatch) => ({
  keyPressed: (key) => dispatch(ACTIONS.keyPressed(key)),
  keyReleased: (key) => dispatch(ACTIONS.keyReleased(key)),
  selectChord: (majmin, letter) => dispatch(ACTIONS.selectChord(majmin, letter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Keyboard);
