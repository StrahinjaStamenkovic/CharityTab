import { Action, createReducer, on } from '@ngrx/store';
import { User } from 'src/app/modules/resources/auth';
import * as AuthActions from '../actions/auth.actions';

export const authFeatureKey = 'auth';

export interface State {
  user: User;
  error: any;
}

export const initialState: State = {
  user: {
    id: null,
    name: null,
    lastName: null,
    username: null,
    password: null,
    isAdming: false,
    bookmarks: null,
    notes: null,
    toDo: null,
    totalCollectedHearts: null,
    currentAmountOfHearts: null,
    totalMoneyDonated: null,
    totalTabsOpened: null,
    dateJoined: null,
  },
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(AuthActions.loginFailure, (state, action) => {
    return {
      ...state,
      user: {
        id: null,
        name: null,
        lastName: null,
        username: null,
        password: null,
        isAdming: false,
        bookmarks: null,
        notes: null,
        toDo: null,
        totalCollectedHearts: null,
        currentAmountOfHearts: null,
        totalMoneyDonated: null,
        totalTabsOpened: null,
        dateJoined: null,
      },
      error: action.error,
    };
  })
);
