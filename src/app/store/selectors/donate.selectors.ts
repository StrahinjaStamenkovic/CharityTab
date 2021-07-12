import { createFeatureSelector, createSelector } from '@ngrx/store';
import { donateFeatureKey, State } from '../reducers/donate.reducer';

export const selectDonateFeature =
  createFeatureSelector<State>(donateFeatureKey);

export const selectDonation = createSelector(
  selectDonateFeature,
  (state: State) => state
);
export interface DonationResultViewModel {
  name: string | undefined;
  amount: number | undefined;
  status: boolean | null;
}
export const selectDonationResultViewModel = createSelector(
  selectDonateFeature,
  (state: State) => ({
    name: state.donation?.charity.name,
    amount: state.donation?.amount,
    status: state.isSuccessful,
  })
);
