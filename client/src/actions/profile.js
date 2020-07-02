import { createAction } from '../utils';

export const getProfileSuccess = createAction('GET_PROFILE_SUCCESS', 'profile');
export const getProfileError = createAction('GET_PROFILE_ERROR', 'error');
export const updateProfileSuccess = createAction('UPDATE_PROFILE', 'profile');
export const clearProfile = createAction('CLEAR_PROFILE');