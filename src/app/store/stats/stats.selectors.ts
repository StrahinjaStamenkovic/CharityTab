import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../../modules/auth/state/auth.selectors';
import * as fromAuth from '../../modules/auth/state/auth.reducer';

export interface StatsViewModel {
  username: string | null;
  totalCollectedHearts: number;
  currentAmountOfHearts: number;
  totalMoneyDonated: number;
  totalHeartsDonated: number;
  totalTabsOpened: number;
}

export const selectStatsViewModel = createSelector(
  selectAuthState,
  (state: fromAuth.State): StatsViewModel => ({
    username: state.user.username,
    totalCollectedHearts: state.user.totalCollectedHearts,
    currentAmountOfHearts: state.user.currentAmountOfHearts,
    totalMoneyDonated: state.user.totalMoneyDonated,
    totalHeartsDonated: state.user.totalHeartsDonated,
    totalTabsOpened: state.user.totalTabsOpened,
  })
);
