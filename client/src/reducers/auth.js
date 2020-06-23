import { createReducer } from '../utils';
import { registerSuccess, registerFail } from '../actions';

const initialState = {
  token: localStorage.getItem('token'),
  isAuth: null,
  loading: true,
  user: null,
}

export const userReducer = createReducer(initialState, {
  [registerSuccess]: (state, {token}) => ({
    ...state,
    token,
    isAuth: true,
    loading: false,
  }),
  [registerFail]: (state) => ({
    ...state,
    token: null,
    isAuth: false,
    loading: false,
  })
});