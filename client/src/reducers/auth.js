import { createReducer } from '../utils';
import { 
  registerSuccess, 
  registerFail,
  getUserSuccess,
  getUserError,
  loginSuccess,
} from '../actions';

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
  }),
  [getUserSuccess]: (state, { user }) => ({
    ...state,
    isAuth: true,
    loading: false,
    user,
  }),
  [getUserError]: (state) => ({
    ...state,
    token: null,
    isAuth: false,
    loading: false,
  }),
  [loginSuccess]: (state, {token}) => ({
    ...state,
    token,
    isAuth: true,
    loading: false,
  })
});