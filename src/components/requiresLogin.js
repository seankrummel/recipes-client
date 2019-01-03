import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

export default () => Component => {
  function RequiresLogin(props) {
    const {authenticating, loggedIn, error, ...passThroughProps} = props;
    if (authenticating) return <div>Logging In</div>;
    else if (!loggedIn || error) return <Redirect to="/"/>;
    return <Component {...passThroughProps} />;
  }

  RequiresLogin.displayName = `RequiresLogin(${Component.displayName || Component.name || 'Component'})`;

  const mapStateToProps = (state) => ({
    authenticating: state.auth.loading,
    loggedIn: state.auth.currentUser !== null,
    error: state.auth.error
  });
  return connect(mapStateToProps)(RequiresLogin);
}
