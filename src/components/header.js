import React from 'react';
import {connect} from 'react-redux';
// import {Redirect} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../localStorage';

class Header extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
    // return <Redirect to="/"/>
  }

  render() {
    let logOutButton;
    if (this.props.loggedIn) logOutButton = <button onClick={() => this.logOut()}>Log Out</button>;
    return (
      <div className="header">
        The header is Here!
        {logOutButton}
      </div>
    );
  }
}

const mapStateToProps = state => ({loggedIn: state.auth.currentUser !== null});
export default connect(mapStateToProps)(Header);
