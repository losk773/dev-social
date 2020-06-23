import { combineReducers } from 'redux';
import { alertsReducer } from './alerts';
import { userReducer } from './auth';

export default combineReducers({
  alerts: alertsReducer,
  user: userReducer,
});