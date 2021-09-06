import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import * as fromAuthActions from '../../modules/auth/state/auth.actions';
@Injectable()
export class SpinnerEffects {
  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {}

  sopinneron$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginPage,
          fromAuthActions.logout,
          fromAuthActions.registerPage
        ),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  );

  sopinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginSuccess,
          fromAuthActions.loginFailure,
          fromAuthActions.logoutSuccess,
          fromAuthActions.logoutFailure,
          fromAuthActions.registerSuccess,
          fromAuthActions.registerFailure
        ),
        tap(() => {
          setTimeout(() => {
            //otkloni kasnije mozda
            this.spinner.hide();
          }, 1000);
        })
      ),
    { dispatch: false }
  );
}
