const initialState = {authToken: null, currentUser: null, loading: false, error: null};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'SET_AUTH_TOKEN':
      return {...state, authToken: action.authToken};
    case 'CLEAR_AUTH':
      return {...state, authToken: null};
    case 'AUTH_REQUEST':
      return {...state, loading: true};
    case 'AUTH_SUCCESS':
      return {...state, currentUser: action.user, loading: false, error: null};
    case 'AUTH_ERROR':
      return {...state, loading: false, error: action.err}
    default:
      return state;
  }
};