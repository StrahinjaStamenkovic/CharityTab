import { createSelector } from '@ngrx/store';
import { selectAuthState } from './auth.selectors';
import * as fromAuth from '../reducers/auth.reducer';

export interface HeaderViewModel {
  totalMoneyDonated: number;
  userHeartsAmount: number;
  userTotalHeartsDonated: number;
}

export const selectHeaderViewModel = createSelector(
  selectAuthState,
  (state: fromAuth.State): HeaderViewModel => ({
    userHeartsAmount: state.user.currentAmountOfHearts,
    userTotalHeartsDonated: state.user.totalHeartsDonated,
    totalMoneyDonated: state.user.totalMoneyDonated,
  })
);
