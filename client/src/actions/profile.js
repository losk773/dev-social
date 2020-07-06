import { createAction } from '../utils';

export const getProfileSuccess = createAction('GET_PROFILE_SUCCESS', 'profile');
export const getProfileError = createAction('GET_PROFILE_ERROR', 'error');
export const updateProfileSuccess = createAction('UPDATE_PROFILE', 'profile');
export const clearProfile = createAction('CLEAR_PROFILE');
export const getProfilesSuccess = createAction('GET_PROFILES_SUCCESS', 'profiles');
export const getGithubReposSuccess = createAction('GET_GITHUB_REPOS_SUCCESS', 'repos');