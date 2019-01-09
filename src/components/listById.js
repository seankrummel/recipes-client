import React from 'react';
import {connect} from 'react-redux';
import {unsetCurrentList} from '../actions/lists';
import {getRecipeById} from '../actions/recipes';

class ListById extends React.Component {
  recipeClicked(id) {
    this.props.dispatch(getRecipeById(id));
  }
  goBack() {
    this.props.dispatch(unsetCurrentList());
  }

  render() {
    const recipes = this.props.list.recipes.map((recipe, index) => (
      <li key={index} onClick={() => this.recipeClicked(recipe.id)}>{recipe.title}</li>
    ));
    return (
      <div className="list-by-id">
        <h2>{this.props.list.title}</h2>
        <div className="recipes">
          <ul>{recipes}</ul>
        </div>
        <button onClick={() => this.goBack()}>Go Back</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({list: state.lists.currentList});
export default connect(mapStateToProps)(ListById);
