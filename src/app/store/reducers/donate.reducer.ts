import { createReducer, on } from '@ngrx/store';
import { Charity } from 'src/app/models/charity';
import { CharityDonation } from 'src/app/models/charity-donation';
import * as fromDonateActions from '../actions/donate.actions';

export const donateFeatureKey = 'donate';

export interface State {
  donation: CharityDonation | null;
  isSuccessful: boolean | null;
}

export const initialState: State = {
  donation: null,
  isSuccessful: null,
};

export const reducer = createReducer(
  initialState,
  on(fromDonateActions.donatingHeartsToCharity, (state, action) => {
    return {
      ...state,
      donation: action.data,
    };
  }),
  on(fromDonateActions.donationStatus, (state, action) => {
    return {
      ...state,
      isSuccessful: action.isSuccessful,
    };
  }),
  on(fromDonateActions.clearDonation, (state) => {
    return {
      ...state,
      donation: null,
      isSuccessful: null,
    };
  })
);
