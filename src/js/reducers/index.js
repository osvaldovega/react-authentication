import { combineReducers } from 'redux';
import loginReducer from './login';

const ownReducers = {
  login: loginReducer
};

const AppReducers = combineReducers(ownReducers);

export default AppReducers;
