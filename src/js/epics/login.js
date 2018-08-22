import * as actionTypes from '../utils/constants';
import { ofType } from 'redux-observable';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
import { catchError } from 'rxjs/operators/catchError';
import { from, of } from 'rxjs';
import api from '../services';
import { validateUserSuccess, validateUserError } from '../actions';
import localStorage from '../utils/localStorage';

export const userValidationEpic = (action$) => action$.pipe(
  ofType(actionTypes.LOGIN_FORM_VALIDATING_USER),
  switchMap(({payload}) => {
    const credentials = `${payload.username}${payload.password}`;

    return from(api.isUserValid(credentials)).pipe(
      map(response => {
        localStorage.set('token', response.token);
        return validateUserSuccess(response);
      }),
      catchError(error => of(validateUserError(error)))
    );
  }),
);
