import React from 'react';
import {connect} from 'react-redux';
import {unsetCurrentRecipe, deleteRecipe} from '../actions/recipes';

class RecipeById extends React.Component {
  deleteRecipe(id) {
    this.props.dispatch(deleteRecipe(id));
  }
  goBack() {
    this.props.dispatch(unsetCurrentRecipe());
  }

  render() {
    const ingredients = this.props.recipe.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient.ingredient}, {ingredient.quantity}</li>
    ));
    return (
      <div className="recipe-by-id">
        <h2>{this.props.recipe.title}</h2>
        <div className="ingredients">
          <h3>Ingredients</h3>
          <ul>{ingredients}</ul>
        </div>
        <div className="instructions">
          <h3>Instructions</h3>
          {this.props.recipe.instructions}
        </div>
        <button onClick={() => this.deleteRecipe(this.props.recipe.id)}>Delete</button>
        <button onClick={() => this.goBack()}>Go Back</button>
        {/* this button could either take user to RecipesDisplay or to ListById */}
      </div>
    );
  }
}

const mapStateToProps = state => ({recipe: state.recipes.currentRecipe});
export default connect(mapStateToProps)(RecipeById);
