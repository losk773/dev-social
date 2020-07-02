import axios from 'axios';
import { v4 as uuid } from 'uuid';
import {
  getProfileSuccess,
  getProfileError,
  setAlert,
  removeAlert,
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

export const createProfile = (formData, history, edit = false) => async dispatch => {
  try {
    const { data } = await axios.post('/api/profile', formData);

    dispatch(getProfileSuccess(data));
    dispatch(setAlert(edit ? 'Profile updated' : 'Profile created', 'success'));

    if (!edit) {
      history.push('/dashboard');
    }

    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch(getProfileError({
      msg: error.response.statusText, 
      status: error.response.status
    }));

    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  }
};