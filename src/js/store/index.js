import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import AppReducers from '../reducers';
import rootEpics from '../epics';
import initialState from '../utils/initialState';

const logger = createLogger();
const epicMiddleware = createEpicMiddleware();

const store = createStore(
  AppReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk, epicMiddleware, logger)
  )
);

epicMiddleware.run(rootEpics);

export default store;
