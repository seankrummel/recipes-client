import React from 'react';
import {connect} from 'react-redux';
import {getUserRecipes} from '../actions/recipes';

class RecipesDisplay extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUserRecipes());
  }
  render() {
    // console.log(this.props.recipes);
    const recipes = this.props.recipes.map(recipe => (
      <li key={recipe.id}>{recipe.title}</li>
    ));
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
