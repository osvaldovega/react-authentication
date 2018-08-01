import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import AppReducers from '../reducers';
import initialState from '../utils/initialState';

const logger = createLogger();

const store = createStore(
  AppReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk, logger)
  )
);

export default store;
