import {API_BASE_URL} from '../config';

const testActionRequest = () => ({
  type: 'TEST_ACTION_REQUEST'
})

const testActionSuccess = (data) => ({
  type: 'TEST_ACTION_SUCCESS',
  data
})

const testActionError = (err) => ({
  type: 'TEST_ACTION_ERROR',
  err
})

export const testAction = () => dispatch => {
  dispatch(testActionRequest());
  fetch(`${API_BASE_URL}/test`)
    .then(res => {
      if (!res.ok) return Promise.reject(res.statusText);
      return res.json();
    })
    .then(data => dispatch(testActionSuccess(data)))
    .catch(err => dispatch(testActionError(err)));
}
