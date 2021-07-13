import { createAction, props } from '@ngrx/store';
import { CharityDonation } from 'src/app/models/charity-donation';
import { User } from 'src/app/modules/resources/auth';

export const donatingHeartsToCharity = createAction(
  '[Charity Component Donate] Donating Hearts To Charity',
  props<{ data: CharityDonation }>()
);
export const donationSuccessful = createAction(
  '[Charity Component Effect] Donation Successful',
  props<{ user: User }>()
);
export const donationUnSuccesful = createAction(
  '[Charity Component Effect] Donation Unsuccessful'
);

export const clearDonation = createAction(
  '[Charity List Component] Clear Donation'
);
