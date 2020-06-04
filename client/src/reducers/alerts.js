import { createReducer } from '../utils';
import { setAlert, removeAlert } from '../actions';

export const alertsReducer = createReducer([], {
  [setAlert]: (state, { id, msg, alertType }) => [...state, { id, msg, alertType }],
  [removeAlert]: (state, { id }) => state.filter(alert => alert.id !== id)
});