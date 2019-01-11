import React from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';
import RegistrationForm from './registrationForm';

function RegistrationPage(props) {
  if (props.loggedIn) return <Redirect to="/dashboard"/>
  return (
    <div className="registration-page">
      <h2>Register</h2>
      <RegistrationForm />
      <Link to="/"><button>Already have an account? Login</button></Link>
    </div>
  );
}

const mapStateToProps = (state) => ({loggedIn: state.auth.currentUser !== null});
export default connect(mapStateToProps)(RegistrationPage);
