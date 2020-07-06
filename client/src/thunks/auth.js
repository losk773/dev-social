import axios from 'axios';
import { 
  registerSuccess,
  registerFail,
  getUserSuccess,
  getUserError,
  loginSuccess,
  loginError,
  setAlert,
  removeAlert,
} from '../actions';
import { setAuthToken } from '../utils';

export const register = ({name, email, password}) => async dispatch => {
  try {
    const { data } = await axios.post('/api/users', {name, email, password});
    localStorage.setItem('token', data.token);
    dispatch(registerSuccess(data.token));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    setTimeout(() => {
      dispatch(removeAlert())
    }, 1000);

    dispatch(registerFail());
    localStorage.removeItem('token');
  }
};

export const getUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const { data } = await axios.get('/api/auth');
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserError());
    localStorage.removeItem('token');
  }
};

export const login = (email, password) => async dispatch => {
  try {
    const { data } = await axios.post('/api/auth', {email, password});
    localStorage.setItem('token', data.token);
    dispatch(loginSuccess(data.token));
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
    }

    setTimeout(() => {
      dispatch(removeAlert())
    }, 1000);

    dispatch(loginError());
    localStorage.removeItem('token');
  }
};