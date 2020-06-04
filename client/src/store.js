import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { batch } from './utils';

const initialState = {};

const middleware = [thunk, batch];

export const store = createStore(
  rootReducer, 
  initialState, 
  composeWithDevTools(applyMiddleware(...middleware))
);