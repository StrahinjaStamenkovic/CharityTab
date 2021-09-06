import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, pipe } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { CharityService } from 'src/app/services/charity.service';
import * as fromDonateActions from './donate.actions';
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
        this.charityService.donateToCharity(action.data).pipe(
          map((status) =>
            fromDonateActions.donationSuccessful({ user: action.data.user })
          ),
          catchError((error) => of(fromDonateActions.donationUnSuccesful()))
        )
      )
    );
  });

  donationSuccessful$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromDonateActions.donationSuccessful),
        /** An EMPTY observable only emits completion. Replace with your own observable stream */
        tap((action) => {
          localStorage.setItem(
            'user',
            JSON.stringify({
              ...action.user,
              currentAmountOfHearts: 0,
              totalMoneyDonated:
                action.user.totalMoneyDonated +
                action.user.currentAmountOfHearts * 0.01,
              totalHeartsDonated:
                action.user.totalHeartsDonated +
                action.user.currentAmountOfHearts,
            })
          );
        })
      ),
    { dispatch: false }
  );
}
