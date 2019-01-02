import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import usersReducer from './users';
import authReducer from './auth';

export const rootReducer = combineReducers({form: formReducer, users: usersReducer, auth: authReducer});
