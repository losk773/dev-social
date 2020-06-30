import axios from 'axios';
import { v4 as uuid } from 'uuid';
import {
  getProfileSuccess,
  getProfileError,
  setAlert,
} from '../actions';
import { setAuthToken } from '../utils';

export const getProfile = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/profile/me');

    dispatch(getProfileSuccess(data));
  } catch (error) {
    dispatch(getProfileError({
      msg: error.response.statusText, 
      status: error.response.status
    }));
  }
};