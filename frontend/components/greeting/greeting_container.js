// GreetingContainer passes as props to the
// presentational component currentUser from the
// state and the logout action creator. Set up
// mapStateToProps and mapDispatchToProps accordingly.

import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ state }) => ({
  currentUser: state.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
);
