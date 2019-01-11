const initialState = {recipes: [], currentRecipe: null, editing: false, loading: false, err: null};

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
    case 'START_EDITING_RECIPE':
      return {...state, editing: true};
    case 'STOP_EDITING_RECIPE':
      return {...state, editing: false};
    case 'POST_RECIPE_REQUEST':
      return {...state, loading: true};
    case 'POST_RECIPE_SUCCESS':
      return {...state, editing: false, loading: false, err: null};
    case 'POST_RECIPE_ERROR':
      return {...state, loading: false, err: action.err};
    case 'DELETE_RECIPE_REQUEST':
      return {...state, loading: true};
    case 'DELETE_RECIPE_SUCCESS':
      return {...state, currentRecipe: null, loading: false, err: null};
    case 'DELETE_RECIPE_ERROR':
      return {...state, loading: false, err: action.err};
    default:
      return state;
  }
}
