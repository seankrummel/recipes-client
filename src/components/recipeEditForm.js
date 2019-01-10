import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {connect} from 'react-redux';
import Input from './input';
// import IngredientInput from './ingredientInput';

class RecipeEditForm extends React.Component {
  onSubmit(values) {
    const {title, instructions} = values;
    return this.props.dispatch();
  }

  render() {
    console.log(this.props);
    return (
      <form className="edit-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field name="title" label="Title" component={Input} type="text"/>
        {/* <Field component={IngredientInput}/> */}
        <Field name="instructions" label="Instructions" component={Input} element="textarea" rows="10" cols="50"/>
        {/* This field should pass the rows and cols props through, but doesn't. type gets passed through above, so the*/}
        {/* issue isn't that nothing can get passed through, but these specifically can't be */}
      </form>
    );
  }
}

const mapStateToProps = state => ({});
export default reduxForm({
  form: 'recipeEdit',
  onSubmitFail: (errors, dispatch) => dispatch(focus('recipeEdit', Object.keys(errors)[0]))
})(connect(mapStateToProps)(RecipeEditForm)); // I did something like this in dashboard.js, but I wrote one of the
// higher-order components in that case, is there anything I should be aware of when using multiple hoc's here?
