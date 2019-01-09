const initialState = {recipes: [], loading: false, err: null};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_USER_RECIPES_REQUEST':
      return {...state, loading: true};
    case 'GET_USER_RECIPES_SUCCESS':
      return {recipes: action.data, loading: false, err: null};
    case 'GET_USER_RECIPES_ERROR':
      return {recipes: state.recipes, loading: false, err: action.err};
    default:
      return state;
  }
}
