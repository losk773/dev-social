import { createReducer } from '../utils';
import { getPostsSuccess, getPostsError } from '../actions';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export const postReducer = createReducer(initialState, {
  [getPostsSuccess]: (state, { posts }) => ({...state, posts, loading: false}),
  [getPostsError]: (state, { error }) => ({...state, error, loading: false}),
});