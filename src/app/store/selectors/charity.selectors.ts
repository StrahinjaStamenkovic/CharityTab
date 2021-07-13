import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAuthState } from './auth.selectors';
import * as fromAuth from '../reducers/auth.reducer';

// export interface Charity {
//   username: string | null;
//   totalCollectedHearts: number;
//   currentAmountOfHearts: number;
//   totalMoneyDonated: number;
//   totalHeartsDonated: number;
//   totalTabsOpened: number;
// }

export const selectAvailableHearts = createSelector(
  selectAuthState,
  (state: fromAuth.State): number => state.user.currentAmountOfHearts
);
