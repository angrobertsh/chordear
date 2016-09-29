import { connect } from 'react-redux';
import Tutorial from './tutorial';

const mapStateToProps = (state) => ({
  // shuffle button position
  // chord select position
  // lower keyboard position
  // playing keyboard position
  // hard button position
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tutorial);
