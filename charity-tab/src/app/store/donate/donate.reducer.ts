import { createReducer, on } from '@ngrx/store';
import { Charity } from 'src/app/modules/charities/state/charity.model';
import { CharityDonation } from 'src/app/modules/charities/state/charity-donation';
import * as fromDonateActions from './donate.actions';

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
  on(fromDonateActions.donationSuccessful, (state, action) => {
    return {
      ...state,
      isSuccessful: true,
    };
  }),
  on(fromDonateActions.donationUnSuccesful, (state, action) => {
    return {
      ...state,
      isSuccessful: false,
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
