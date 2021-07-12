import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { pipe } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';
import { CharityService } from 'src/app/services/charity-service.service';
import * as fromDonateActions from '../actions/donate.actions';
@Injectable()
export class DonateEffects {
  constructor(
    private actions$: Actions,
    private charityService: CharityService
  ) {}

  sendDonation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromDonateActions.donatingHeartsToCharity),
      /** An EMPTY observable only emits completion. Replace with your own observable stream */
      mergeMap((action) =>
        this.charityService
          .donateToCharity(action.data)
          .pipe(
            map((status) =>
              fromDonateActions.donationStatus({ isSuccessful: status })
            )
          )
      )
    );
  });
}
