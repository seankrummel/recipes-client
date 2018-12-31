const initialState = {user: null, loading: false, error: null};

export const userReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'TEST_ACTION_REQUEST':
      return {...state, loading: true};
    case 'TEST_ACTION_SUCCESS':
      return {user: action.data, loading: false, error: null};
    case 'TEST_ACTION_ERROR':
      return {user: state.user, loading: false, error: action.err};
    default:
      return state;
  }
};
