import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LoginForm from './loginForm';

function LandingPage(props) {
  let display = <Link to="/dashboard">Go to dashboard</Link>
  if (!props.loggedIn) display = <LoginForm/>
  return (
    <div className="landing-page">
      {display}
      *add onboarding instructions here*
    </div>
  );
}

const mapStateToProps = (state) => ({loggedIn: state.auth.currentUser !== null});
export default connect(mapStateToProps)(LandingPage);
