import {SubmissionError} from 'redux-form';
import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

const registerUserRequest = () => ({
  type: 'REGISTER_USER_REQUEST'
})
const registerUserSuccess = () => ({
  type: 'REGISTER_USER_SUCCESS',
})
const registerUserError = err => ({
  type: 'REGISTER_USER_ERROR',
  err
})

export const registerUser = user => dispatch => {
  dispatch(registerUserRequest());
  return fetch(`${API_BASE_URL}/users`, {
    method: 'POST',
    headers: {'content-type': 'application/json'},
    body: JSON.stringify(user)
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(registerUserSuccess()))
    .catch(err => {
      dispatch(registerUserError(err));
      const {reason, message, location} = err;
      if (reason === 'ValidationError') return Promise.reject(new SubmissionError({[location]: message}))
    });
}
