import { connect } from 'react-redux';
import Tutorial from './tutorial';
import * as ACTIONS from '../../actions/note_actions';

const mapStateToProps = (state) => ({
  notes: state.notes.notes || [],
});

const mapDispatchToProps = (dispatch) => ({
  setNotes: (notes) => dispatch(ACTIONS.setNotes(notes))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutorial);
