import { combineReducers } from 'redux';
import userReducer from './userReducer';
import loggedIn from './isLoggedIn'
export const rootReducer = combineReducers({
    userReducer,
    loggedIn
});