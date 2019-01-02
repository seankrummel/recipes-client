import jwtDecode from 'jwt-decode';
import {SubmissionError} from 'redux-form';
import { API_BASE_URL } from '../config';
import { normalizeResponseErrors } from './utils';
import {saveAuthToken, clearAuthToken} from '../localStorage';

export const setAuthToken = authToken => ({
  type: 'SET_AUTH_TOKEN',
  authToken
});
export const clearAuth = () => ({
  type: 'CLEAR_AUTH'
});
const authRequest = () => ({
  type: 'AUTH_REQUEST'
});
const authSuccess = user => ({
  type: 'AUTH_SUCCESS',
  user
});
const authError = err => ({
  type: 'AUTH_ERROR',
  err
});

const storeAuthInfo = (authToken, dispatch) => {
  const decodedToken = jwtDecode(authToken);
  dispatch(setAuthToken(authToken));
  dispatch(authSuccess(decodedToken.user));
  saveAuthToken(authToken);
};
export const login = (username, password) => dispatch => {
  dispatch(authRequest());
  return fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    headers: {contentType: 'application/json'},
    body: JSON.stringify({username, password})
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      const code = err.code;
      const message = code === 401 ? 'Incorrect Username or Password' : 'Unable to login, please try again';
      dispatch(authError(err));
      return Promise.reject(new SubmissionError({_error: message}));
    });
};
export const refreshAuthToken = () => (dispatch, getState) => {
  dispatch(authRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/auth/refresh`, {
    method: 'POST',
    headers: {Authorization: `Bearer ${authToken}`},
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(({authToken}) => storeAuthInfo(authToken, dispatch))
    .catch(err => {
      dispatch(authError(err));
      dispatch(clearAuth());
      clearAuthToken();
    });
};
