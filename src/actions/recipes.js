import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

const getUserRecipesRequest = () => ({
  type: 'GET_USER_RECIPES_REQUEST'
});
const getUserRecipesSuccess = data => ({
  type: 'GET_USER_RECIPES_SUCCESS',
  data
});
const getUserRecipesError = err => ({
  type: 'GET_USER_RECIPES_ERROR',
  err
});

export const getUserRecipes = () => (dispatch, getState) => {
  dispatch(getUserRecipesRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/recipes`, {
    method: 'GET',
    headers: {Authorization: `Bearer ${authToken}`}
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(getUserRecipesSuccess(data)))
    .catch(err => dispatch(getUserRecipesError(err)));
};