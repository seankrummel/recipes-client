const initialState = {recipes: [], currentRecipe: null, loading: false, err: null};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_USER_RECIPES_REQUEST':
      return {...state, loading: true};
    case 'GET_USER_RECIPES_SUCCESS':
      return {...state, recipes: action.data, loading: false, err: null};
    case 'GET_USER_RECIPES_ERROR':
      return {...state, loading: false, err: action.err};
    case 'GET_RECIPE_BY_ID_REQUEST':
      return {...state, loading: true};
    case 'GET_RECIPE_BY_ID_SUCCESS':
      return {...state, currentRecipe: action.data, loading: false, err: null};
    case 'GET_RECIPE_BY_ID_ERROR':
      return {...state, loading: false, err: action.err};
    case 'UNSET_CURRENT_RECIPE':
      return {...state, currentRecipe: null};
    default:
      return state;
  }
}
