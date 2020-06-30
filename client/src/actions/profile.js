import { createAction } from '../utils';

export const getProfileSuccess = createAction('GET_PROFILE_SUCCESS', 'profile');
export const getProfileError = createAction('GET_PROFILE_ERROR', 'error');