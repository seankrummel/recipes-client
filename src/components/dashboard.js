import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import RecipesDisplay from './recipesDisplay';
import ListsDisplay from './listsDisplay';
import RecipeById from './recipeById';
import ListById from './listById';

class Dashboard extends React.Component {
  render() {
  let whatToRender = [<RecipesDisplay />, <ListsDisplay />];
    if (this.props.list) whatToRender = <ListById />;
    if (this.props.recipe) whatToRender = <RecipeById />;
    console.log(whatToRender);
    return (
      <div className="dashboard">{whatToRender}</div>
    );
  }
}

const mapStateToProps = state => ({recipe: state.recipes.currentRecipe, list: state.lists.currentList});
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
