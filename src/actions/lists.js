import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

const getUserListsRequest = () => ({
  type: 'GET_USER_LISTS_REQUEST'
});
const getUserListsSuccess = data => ({
  type: 'GET_USER_LISTS_SUCCESS',
  data
});
const getUserListsError = err => ({
  type: 'GET_USER_LISTS_ERROR',
  err
});

export const getUserLists = () => (dispatch, getState) => {
  dispatch(getUserListsRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/lists`, {
    method: 'GET',
    headers: {Authorization: `Bearer ${authToken}`}
  })
  .then(res => normalizeResponseErrors(res))
  .then(res => res.json())
  .then(data => dispatch(getUserListsSuccess(data)))
  .catch(err => getUserListsError(err));
};
