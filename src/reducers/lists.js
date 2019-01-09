const initialState = {lists: [], loading: false, err: null};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_USER_LISTS_REQUEST':
      return {...state, loading: true};
    case 'GET_USER_LISTS_SUCCESS':
      return {lists: action.data, loading: false, err: null};
    case 'GET_USER_LISTS_ERROR':
      return {lists: state.lists, loading: false, err: action.err};
    default:
      return state;
  }
}
