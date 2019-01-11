import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {stopEditingRecipe, postRecipe} from '../actions/recipes';

class RecipePostForm extends React.Component {
  onSubmit(values) {
    const {title, ingredients, instructions} = values;
    let ingredientsArray = [];
    // ingredients = '{ingredient, quantity} {ingredient, quantity} {ingredient} etc'
    ingredients.split('}').forEach((element) => {
      // element = '{ingredient, quantity' => remove curly brace and split on comma
      const ingredient = element.trim().slice(1).split(',')
      if (ingredient[0] && ingredient[1]) ingredientsArray.push({ingredient: ingredient[0], quantity: ingredient[1]});
    });
    console.log('title:', title, 'ingredients:', ingredientsArray, 'instructions:', instructions);
    return this.props.dispatch(postRecipe(title, ingredientsArray, instructions));
  }
  goBack() {
    this.props.dispatch(stopEditingRecipe());
  }

  render() {
    // console.log(this.props);
    return (
      <div className="recipe-post-form">
        <form className="recipe-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
          <Field name="title" label="Title" component={Input} type="text"/>
          <Field name="ingredients" label="Ingredients" component={Input} element="textarea" rows="15" cols="25" />
          {/* add message telling user to format input as '{ingredient, quantity} {ingredient, quantity}' */}
          <Field name="instructions" label="Instructions" component={Input} element="textarea" rows="10" cols="50"/>
          {/* This field should pass the rows and cols props through, but doesn't. type gets passed through above, so the*/}
          {/* issue isn't that nothing can get passed through, but these specifically can't be */}
          <button type="submit">Submit</button>
        </form>
        <button onClick={() => this.goBack()}>Go Back</button>
      </div>
    );
  }
}

export default reduxForm({
  form: 'recipeEdit',
  onSubmitFail: (errors, dispatch) => dispatch(focus('recipeEdit', Object.keys(errors)[0]))
})(RecipePostForm);
