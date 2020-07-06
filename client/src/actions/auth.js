import { createAction } from '../utils';

export const registerSuccess = createAction('REGISTER_SUCCESS', 'token');
export const registerFail = createAction('REGISTER_FAIL');
export const getUserSuccess = createAction('GET_USER_SUCCESS', 'user');
export const getUserError = createAction('GET_USER_ERROR');
export const loginSuccess = createAction('LOGIN_SUCCESS', 'token');
export const loginError = createAction('LOGIN_ERROR');
export const logoutSuccess = createAction('LOGOUT_SUCCESS');
export const deletedAccountSuccess = createAction('DELETED_ACCOUNT');
