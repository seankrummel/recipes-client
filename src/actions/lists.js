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
const getListByIdRequest = () => ({
  type: 'GET_LIST_BY_ID_REQUEST'
});
const getListByIdSuccess = data => ({
  type: 'GET_LIST_BY_ID_SUCCESS',
  data
});
const getListByIdError = err => ({
  type: 'GET_LIST_BY_ID_ERROR',
  err
});
export const unsetCurrentList = () => ({
  type: 'UNSET_CURRENT_LIST'
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
  .catch(err => dispatch(getUserListsError(err)));
};
export const getListById = id => (dispatch, getState) => {
  dispatch(getListByIdRequest());
  const authToken = getState().auth.authToken;
  fetch(`${API_BASE_URL}/api/lists/${id}`, {
    method: 'GET',
    headers: {Authorization: `Bearer ${authToken}`}
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(getListByIdSuccess(data)))
    .catch(err => dispatch(getListByIdError(err)));
};
