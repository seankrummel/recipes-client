import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
// import {login} from '../actions/auth';
import Input from './input';
import {required, notEmpty, isTrimmed, matches, length} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

class RegistrationForm extends React.Component {
  onSubmit(values) {
    const {username, password} = values;
    return this.props.dispatch(registerUser({username, password}))
      // .then(() => this.props.dispatch(login(username, password)));
  }
  render() {
    return (
      <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <Field name="username" label="Username" type="text" /*element="input"*/ component={Input} validate={[
          required, notEmpty, isTrimmed
        ]}/>
        <Field name="password" label="Password" type="password" component={Input} validate={[
          required, isTrimmed, passwordLength
        ]}/>
        <Field name="passwordConfirm" label="Confirm Password" type="password" component={Input} validate={[
          required, matchesPassword
        ]}/>
        <button type="submit" disabled={this.props.pristine || this.props.submitting}>Register</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
