import { createAction } from '../utils';

export const getPostsSuccess = createAction('GET_POSTS_SUCCESS', 'posts');
export const getPostsError = createAction('GET_POSTS_ERROR', 'error');