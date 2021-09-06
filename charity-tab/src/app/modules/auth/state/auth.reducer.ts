import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/auth';
//import { newTab } from '../app/app.actions';
import * as AuthActions from './auth.actions';
import * as fromDonateActions from '../../../store/donate/donate.actions';

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
    isAdmin: false,
    totalCollectedHearts: 0,
    currentAmountOfHearts: 0,
    totalMoneyDonated: 0,
    totalHeartsDonated: 0,
    totalTabsOpened: 0,
    dateJoined: null,
  },
  error: null,
};

export const reducer = createReducer(
  initialState,

  on(AuthActions.loginSuccess, AuthActions.browserReload, (state, action) => {
    return {
      ...state,
      user: action.user,
      error: null,
    };
  }),
  on(fromDonateActions.donationSuccessful, (state) => {
    return {
      ...state,
      user: {
        ...state.user,
        currentAmountOfHearts: 0,
        totalMoneyDonated:
          state.user.totalMoneyDonated +
          state.user.currentAmountOfHearts * 0.01,
        totalHeartsDonated:
          state.user.totalHeartsDonated + state.user.currentAmountOfHearts,
      },
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
        isAdmin: false,
        totalCollectedHearts: 0,
        currentAmountOfHearts: 0,
        totalMoneyDonated: 0,
        totalHeartsDonated: 0,

        totalTabsOpened: 0,
        dateJoined: null,
      },
      error: action.error,
    };
  }),
  on(AuthActions.logout, (state) => {
    return {
      ...state,
      user: {
        id: null,
        name: null,
        lastName: null,
        username: null,
        password: null,
        isAdmin: false,
        totalCollectedHearts: 0,
        currentAmountOfHearts: 0,
        totalMoneyDonated: 0,
        totalHeartsDonated: 0,
        totalTabsOpened: 0,
        dateJoined: null,
      },
      error: null,
    };
  })
);
