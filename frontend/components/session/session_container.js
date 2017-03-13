import { connect } from 'react-redux';
import {login, signup} from '../util/session_api_util';
import SessionForm from './session';

const mapStateToProps = ( state, ownProps ) => ({
  loggedIn: Boolean(state.currentUser),
  errors: state.errors
});

const mapDispatchToProps = (dispatch, {location}) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'login') ? login : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
