import { combineEpics } from 'redux-observable';
import { userValidationEpic } from './login';

const rootEpics = combineEpics(userValidationEpic);

export default rootEpics;
