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
const getRecipeByIdRequest = () => ({
  type: 'GET_RECIPE_BY_ID_REQUEST'
});
const getRecipeByIdSuccess = data => ({
  type: 'GET_RECIPE_BY_ID_SUCCESS',
  data
});
const getRecipeByIdError = err => ({
  type: 'GET_RECIPE_BY_ID_ERROR',
  err
});
export const unsetCurrentRecipe = () => ({
  type: 'UNSET_CURRENT_RECIPE'
});
export const startEditingRecipe = () => ({
  type: 'START_EDITING_RECIPE'
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
export const getRecipeById = id => (dispatch, getState) => {
  dispatch(getRecipeByIdRequest());
  const authToken = getState().auth.authToken;
  return fetch(`${API_BASE_URL}/api/recipes/${id}`, {
    method: 'GET',
    headers: {Authorization: `Bearer ${authToken}`}
  })
    .then(res => normalizeResponseErrors(res))
    .then(res => res.json())
    .then(data => dispatch(getRecipeByIdSuccess(data)))
    .catch(err => dispatch(getRecipeByIdError(err)));
};