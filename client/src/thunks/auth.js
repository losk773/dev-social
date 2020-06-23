import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { registerSuccess, registerFail, setAlert } from '../actions';

export const register = ({name, email, password}) => async dispatch => {
  try {
    const { data } = await axios.post('/api/users', {name, email, password});
    localStorage.setItem('token', data.token);
    dispatch(registerSuccess(data.token))
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(uuid(), error.msg, 'danger')))
    }

    dispatch(registerFail());
    localStorage.removeItem('token');
  }
};