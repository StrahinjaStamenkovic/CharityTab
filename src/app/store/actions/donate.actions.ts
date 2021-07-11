import { createAction, props } from '@ngrx/store';
import { CharityDonation } from 'src/app/models/charity-donation';

export const donatingHeartsToCharity = createAction(
  '[Charity Component Donate] Donating Hearts To Charity',
  props<{ data: CharityDonation }>()
);
