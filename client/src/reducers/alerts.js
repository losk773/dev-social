import { createReducer } from '../utils';
import { setAlert, removeAlert } from '../actions';
import { v4 as uuid } from 'uuid';

export const alertsReducer = createReducer([], {
  [setAlert]: (state, { msg, alertType }) => [...state, { id: uuid(), msg, alertType }],
  [removeAlert]: (state, { id }) => state.filter(alert => alert.id !== id)
});