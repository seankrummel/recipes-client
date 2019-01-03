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
    let error;
    if (this.props.error) error = (
      <div className="form-error" aria-live="polite">
        {this.props.error}
      </div>
    );
    return(
      <form className="login-form" onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
      {error}
        <Field name="username" label="Username" type="text" component={Input} validate={[
          required, notEmpty
        ]} />
        <Field name="password" label="Password" type="password" component={Input} validate={[
          required, notEmpty
        ]} />
        <button type="submit" >Log In</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('registration', Object.keys(errors)[0]))
})(LoginForm);
