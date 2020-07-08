import { createReducer } from '../utils';
import { 
  getPostsSuccess, 
  getPostsError, 
  getPostSuccess,
  updateLikesSuccess, 
  deletePostSuccess,
  addPostSuccess,
} from '../actions';

const initialState = {
  posts: [],
  post: null,
  loading: true,
  error: {}
};

export const postReducer = createReducer(initialState, {
  [getPostsSuccess]: (state, { posts }) => ({...state, posts, loading: false}),
  [getPostSuccess]: (state, { post }) => ({...state, post, loading: false}),
  [deletePostSuccess]: (state, { postId }) => ({
    ...state,
    posts: state.posts.filter(post => post._id !== postId),
    loading: false,
  }),
  [addPostSuccess]: (state, { post }) => ({
    ...state,
    posts: [post, ...state.posts],
    loading: false,
  }),
  [getPostsError]: (state, { error }) => ({...state, error, loading: false}),
  [updateLikesSuccess]: (state, { postId, likes }) => ({
    ...state,
    loading: false,
    posts: state.posts.map(post => post._id === postId ? {...post, likes} : post)
  }),
});