import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import usersReducer from './users';
import authReducer from './auth';
import recipesReducer from './recipes';
import listsReducer from './lists';

export const rootReducer = combineReducers({
  form: formReducer,
  users: usersReducer,
  auth: authReducer,
  recipes: recipesReducer,
  lists: listsReducer
});
