import { connect } from 'react-redux';
import Chordselect from './chordselect';
import * as ACTIONS from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  chord: state.notes.chord,
  notes: state.notes.notes
});

const mapDispatchToProps = (dispatch) => ({
  selectChord: (majmin, letter) => dispatch(ACTIONS.selectChord(majmin, letter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chordselect);
