import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        I'm rendered!
      </div>
    );
  }
}

const mapStateToProps = state => ({});
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
