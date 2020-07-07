import axios from 'axios';
import { 
  getPostsSuccess,
  getPostsError,
  updateLikesSuccess
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