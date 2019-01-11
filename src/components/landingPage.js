import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import LoginForm from './loginForm';

function LandingPage(props) {
  let display = <Link to="/dashboard">Go to Dashboard</Link>
  if (!props.loggedIn) display = <LoginForm/>
  return (
    <div className="landing-page">
      {display}
      <p>This is a recipe app.  You can create, view, and delete recipes.  Clicking on the title of your recipe will display a more detailed page.  Log in and click the 'Go to Dashboard' link above to begin.</p>
    </div>
  );
}

const mapStateToProps = (state) => ({loggedIn: state.auth.currentUser !== null});
export default connect(mapStateToProps)(LandingPage);
