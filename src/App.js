import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/header';
import LandingPage from './components/landingPage';
import RegistrationPage from './components/registrationPage';
import Dashboard from './components/dashboard';
import { refreshAuthToken } from './actions/auth';

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) this.startPeriodicRefresh();
    else if (prevProps.loggedIn && !this.props.loggedIn) this.stopPeriodicRefresh();
  }
  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
    this.refreshInterval = setInterval(() => this.props.dispatch(refreshAuthToken()), 60 * 60 * 1000);
  }
  stopPeriodicRefresh() {
    if (!this.refreshInterval) return
    clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/register" component={RegistrationPage}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
