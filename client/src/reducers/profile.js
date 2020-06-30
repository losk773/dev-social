import { createReducer } from '../utils';
import { getProfileSuccess, getProfileError } from '../actions';

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {}
};

export const profileReducer = createReducer(initialState, {
  [getProfileSuccess]: (state, { profile }) => ({...state, profile, loading: false}),
  [getProfileError]: (state, { error }) => ({...state, error, loading: false})
});