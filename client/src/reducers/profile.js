import { createReducer } from '../utils';
import { 
  getProfileSuccess, 
  getProfileError,
  getProfilesSuccess,
  getGithubReposSuccess,
  clearProfile, 
  updateProfileSuccess,
} from '../actions';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export const profileReducer = createReducer(initialState, {
  [getProfileSuccess]: (state, { profile }) => ({...state, profile, loading: false}),
  [getProfilesSuccess]: (state, { profiles }) => ({...state, profiles, loading: false}),
  [getGithubReposSuccess]: (state, { repos }) => ({...state, repos, loading: false}),
  [updateProfileSuccess]: (state, { profile }) => ({...state, profile, loading: false}),
  [getProfileError]: (state, { error }) => ({...state, error, loading: false}),
  [clearProfile]: (state, { error }) => ({
    ...state,
    profile: null,
    repos: [],
    loading: true,
  })
});