import React from 'react';
import {connect} from 'react-redux';
import {getUserRecipes, getRecipeById, startEditingRecipe} from '../actions/recipes';

class RecipesDisplay extends React.Component {
  recipeClicked(id) {
    this.props.dispatch(getRecipeById(id));
  }
  newRecipe() {
    this.props.dispatch(startEditingRecipe());
  }

  componentDidMount() {
    this.props.dispatch(getUserRecipes());
  }
  render() {
    // console.log(this.props.recipes);
    let recipes = this.props.recipes.map(recipe => (
      <li key={recipe.id} onClick={() => this.recipeClicked(recipe.id)}>{recipe.title}</li>
    ));
    if (recipes.length === 0) recipes = <li>You don't have any recipes. <button onClick={() => this.newRecipe()}>Create a recipe</button></li>;
    return (
      <div className="recipes-display">
        <h2>Your Recipes</h2>
        <ul>{recipes}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => ({recipes: state.recipes.recipes});
export default connect(mapStateToProps)(RecipesDisplay);
