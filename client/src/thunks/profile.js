import axios from 'axios';
import { v4 as uuid } from 'uuid';
import {
  getProfileSuccess,
  getProfileError,
  updateProfileSuccess,
  setAlert,
  removeAlert,
  clearProfile,
  deletedAccountSuccess,
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

export const addExperience = (formData, history) => async dispatch => {
  try {
    const { data } = await axios.put('/api/profile/experience', formData);

    dispatch(updateProfileSuccess(data));
    dispatch(setAlert('Experience added', 'success'));

    history.push('/dashboard');

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

export const addEducation = (formData, history) => async dispatch => {
  try {
    const { data } = await axios.put('/api/profile/education', formData);

    dispatch(updateProfileSuccess(data));
    dispatch(setAlert('Education added', 'success'));

    history.push('/dashboard');

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

export const deleteExperience = (id) => async dispatch => {
  try {
    const { data } = await axios.delete(`/api/profile/experience/${id}`);

    dispatch(updateProfileSuccess(data));
    dispatch(setAlert('Experience removed', 'success'));

    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  } catch (error) {
    dispatch(getProfileError({
      msg: error.response.statusText, 
      status: error.response.status
    }));

    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  }
};

export const deleteEducation = (id) => async dispatch => {
  try {
    const { data } = await axios.delete(`/api/profile/education/${id}`);

    dispatch(updateProfileSuccess(data));
    dispatch(setAlert('Education removed', 'success'));

    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  } catch (error) {
    dispatch(getProfileError({
      msg: error.response.statusText, 
      status: error.response.status
    }));

    setTimeout(() => {
      dispatch(removeAlert());
    }, 3000);
  }
};

export const deleteAccount = () => async dispatch => {
  if (window.confirm('Are you sure? This cannot be undone!')) {
    try {
      const { data } = await axios.delete('/api/profile');
      dispatch(clearProfile());
      dispatch(deletedAccountSuccess());
      dispatch(setAlert('Your account has been deleted', 'success'));
      
      localStorage.removeItem('token');

      setTimeout(() => {
        dispatch(removeAlert());
      }, 3000);
    } catch (error) {
      dispatch(getProfileError({
        msg: error.response.statusText, 
        status: error.response.status
      }));
    }
  }
};