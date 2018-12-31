import React from 'react';
import {connect} from 'react-redux';
import {testAction} from './actions/user';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(testAction());
  }

  render() {
    return (
      <div className="App">
        just making sure this renders, {this.props.test}
      </div>
    );
  }
}

const mapStateToProps = state => ({test: state.user.user});

export default connect(mapStateToProps)(App);
