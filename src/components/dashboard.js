import React from 'react';
import {connect} from 'react-redux';
import requiresLogin from './requiresLogin';
import RecipesDisplay from './recipesDisplay';
import ListsDisplay from './listsDisplay';
import RecipeById from './recipeById';
import ListById from './listById';
import RecipeEditForm from './recipeEditForm';

class Dashboard extends React.Component {
  render() {
  let whatToRender = [<RecipesDisplay />, <ListsDisplay />];
    if (this.props.recipe) whatToRender = <RecipeById />;
    else if (this.props.list) whatToRender = <ListById />;
    else if (this.props.recipeIsEditing) whatToRender = <RecipeEditForm />;
    // else if (this.props.listIsEditing) whatToRender = <ListById />;
    console.log(whatToRender);
    return (
      <div className="dashboard">{whatToRender}</div>
    );
  }
}

const mapStateToProps = state => ({
  recipe: state.recipes.currentRecipe,
  recipeIsEditing: state.recipes.editing,
  list: state.lists.currentList,
  listIsEditing: state.lists.editing
});
export default requiresLogin()(connect(mapStateToProps)(Dashboard));
