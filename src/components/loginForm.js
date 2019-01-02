import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {required, notEmpty} from '../validators';
import {login} from '../actions/auth';

class LoginForm extends React.Component {
  onSubmit(values) {
    const {username, password} = values;
    return this.props.dispatch(login(username, password));
  }
  render() {
    return(
      <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field name="username" label="Username" type="text" component={Input} validate={[
          required, notEmpty
        ]} />
        <Field name="password" label="Password" type="password" component={Input} validate={[
          required, notEmpty
        ]} />
        <button type="submit" disabled={this.props.pristine || this.props.submitting}>Log In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0]))
})(LoginForm);
