const initialState = {lists: [], currentList: null, loading: false, err: null};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'GET_USER_LISTS_REQUEST':
      return {...state, loading: true};
    case 'GET_USER_LISTS_SUCCESS':
      return {...state, lists: action.data, loading: false, err: null};
    case 'GET_USER_LISTS_ERROR':
      return {...state, loading: false, err: action.err};
    case 'GET_LIST_BY_ID_REQUEST':
      return {...state, loading: true};
    case 'GET_LIST_BY_ID_SUCCESS':
      return {...state, currentList: action.data, loading: false, err: null};
    case 'GET_LIST_BY_ID_ERROR':
      return {...state, loading: false, err: action.err};
    case 'UNSET_CURRENT_LIST':
      return {...state, currentList: null};
    default:
      return state;
  }
}
