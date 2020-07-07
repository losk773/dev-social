import { createAction } from '../utils';

export const getPostsSuccess = createAction('GET_POSTS_SUCCESS', 'posts');
export const getPostsError = createAction('GET_POSTS_ERROR', 'error');
export const updateLikesSuccess = createAction('UPDATE_LIKES_SUCCESS', 'postId', 'likes');
export const deletePostSuccess = createAction('DELETE_POST_SUCCESS', 'postId');