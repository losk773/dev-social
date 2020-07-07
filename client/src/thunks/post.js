import axios from 'axios';
import { 
  getPostsSuccess,
  getPostsError
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