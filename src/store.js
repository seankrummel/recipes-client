import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';
import {loadAuthToken} from './localStorage';
import {setAuthToken, refreshAuthToken} from './actions/auth';

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;

const authToken = loadAuthToken();
if (authToken) {
  store.dispatch(setAuthToken(authToken));
  store.dispatch(refreshAuthToken());
}
