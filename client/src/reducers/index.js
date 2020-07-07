import { combineReducers } from 'redux';
import { alertsReducer } from './alerts';
import { userReducer } from './auth';
import { profileReducer } from './profile';
import { postReducer } from './post';

export default combineReducers({
  alerts: alertsReducer,
  user: userReducer,
  profile: profileReducer,
  post: postReducer,
});