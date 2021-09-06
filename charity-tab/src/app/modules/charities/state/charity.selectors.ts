import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectAuthState } from '../../auth/state/auth.selectors';
import * as fromAuth from '../../auth/state/auth.reducer';
import * as CharityReducer from './charity.reducer';

export const selectAvailableHearts = createSelector(
  selectAuthState,
  (state: fromAuth.State): number => state.user.currentAmountOfHearts
);

export const selectCharitiesState = createFeatureSelector<CharityReducer.State>(
  CharityReducer.charitiesFeatureKey
);

export const selectAllCharities = createSelector(
  selectCharitiesState,
  CharityReducer.selectAll
);
