import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../localStorage';
import {unsetCurrentRecipe, startEditingRecipe} from '../actions/recipes';
import {unsetCurrentList} from '../actions/lists';

class Header extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    this.props.dispatch(unsetCurrentRecipe());
    this.props.dispatch(unsetCurrentList());
    clearAuthToken();
  }
  newRecipe() {
    this.props.dispatch(unsetCurrentRecipe()); // incase user clicks while on RecipeById component, so that they make a
    // new recipe instead of editing the one they're on
    this.props.dispatch(startEditingRecipe());
  }
  newList() {}

  render() {
    let buttons
  if (this.props.loggedIn) buttons = [
    <button onClick={() => this.logOut()} key="logOut">Log Out</button>,
    <Link to="/dashboard" key="newRecipe"><button onClick={() => this.newRecipe()}>New Recipe</button></Link>,
    // <button onClick={() => this.newList()} key="newList">New List</button>
  ];
    return (
      <div className="header">
        Recipes
        {buttons}
      </div>
    );
  }
}

const mapStateToProps = state => ({loggedIn: state.auth.currentUser !== null});
export default connect(mapStateToProps)(Header);
