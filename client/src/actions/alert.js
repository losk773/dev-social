import { createAction } from '../utils';

export const setAlert = createAction('SET_ALERT', 'id', 'msg', 'alertType');
export const removeAlert = createAction('REMOVE_ALERT', 'id');