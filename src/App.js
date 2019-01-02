import React from 'react';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import RegistrationForm from './components/registrationForm';

class App extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/"/>
          <Route exact path="/register" component={RegistrationForm}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
