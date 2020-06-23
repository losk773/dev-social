import { createAction } from '../utils';

export const registerSuccess = createAction('REGISTER_SUCCESS', 'token');
export const registerFail = createAction('REGISTER_FAIL');