import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import RecipesDisplay from './recipesDisplay';
import ListsDisplay from './listsDisplay';

class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        <RecipesDisplay />
        <ListsDisplay />
      </div>
    );
  }
}

const mapStateToProps = state => ({});
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
