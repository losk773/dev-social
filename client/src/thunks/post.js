import axios from 'axios';
import { 
  getPostsSuccess,
  getPostsError,
  updateLikesSuccess,
  deletePostSuccess,
  addPostSuccess,
  setAlert,
  removeAlert,
} from '../actions';

export const getPosts = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/posts');

    dispatch(getPostsSuccess(data));
  } catch (error) {
    dispatch(getPostsError({
      msg: error.response.statusText, 
      status: error.response.status
    }));
  }
};

export const addLike = (postId) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/posts/like/${postId}`);

    dispatch(updateLikesSuccess(postId, data));
  } catch (error) {
    dispatch(getPostsError({
      msg: error.response.statusText, 
      status: error.response.status
    }));
  }
};

export const removeLike = (postId) => async dispatch => {
  try {
    const { data } = await axios.put(`/api/posts/unlike/${postId}`);

    dispatch(updateLikesSuccess(postId, data));
  } catch (error) {
    dispatch(getPostsError({
      msg: error.response.statusText, 
      status: error.response.status
    }));
  }
};

export const deletePost = (postId) => async dispatch => {
  try {
    await axios.delete(`/api/posts/${postId}`);

    dispatch(deletePostSuccess(postId));
    dispatch(setAlert('The post has been deleted', 'success'));

    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  } catch (error) {
    dispatch(getPostsError({
      msg: error.response.statusText, 
      status: error.response.status
    }));
  }
};

export const addPost = (formData) => async dispatch => {
  try {
    const { data } = await axios.post('/api/posts', formData);

    dispatch(addPostSuccess(data));
    dispatch(setAlert('The post created', 'success'));

    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  } catch (error) {
    dispatch(getPostsError({
      msg: error.response.statusText, 
      status: error.response.status
    }));
  }
};