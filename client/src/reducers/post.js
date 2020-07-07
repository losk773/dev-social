import { createReducer } from '../utils';
import { getPostsSuccess, getPostsError, updateLikesSuccess, deletePostSuccess } from '../actions';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export const postReducer = createReducer(initialState, {
  [getPostsSuccess]: (state, { posts }) => ({...state, posts, loading: false}),
  [deletePostSuccess]: (state, { postId }) => ({
    ...state,
    posts: state.posts.filter(post => post._id !== postId),
    loading: false,
  }),
  [getPostsError]: (state, { error }) => ({...state, error, loading: false}),
  [updateLikesSuccess]: (state, { postId, likes }) => ({
    ...state,
    loading: false,
    posts: state.posts.map(post => post._id === postId ? {...post, likes} : post)
  }),
});