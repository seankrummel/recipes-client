const initialState = {loading: false, err: null};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER_REQUEST':
      return {loading: true, err: state.err};
    case 'REGISTER_USER_SUCCESS':
      return {loading: false, err: null};
    case 'REGISTER_USER_ERROR':
      return {loading: false, err: action.err};
    default:
      return state;
  }
}