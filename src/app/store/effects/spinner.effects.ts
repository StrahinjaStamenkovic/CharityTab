import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { NgxSpinnerService } from 'ngx-spinner';
import { tap } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';
@Injectable()
export class SpinnerEffects {
  constructor(private actions$: Actions, private spinner: NgxSpinnerService) {}

  sopinneronLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginPage, fromAuthActions.logout),
        tap(() => this.spinner.show())
      ),
    { dispatch: false }
  );
  // sopinneronLogout$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType(fromAuthActions.logout),
  //       tap(() => {
  //         this.spinner.show();
  //         setTimeout(() => {
  //           //otkloni kasnije mozda
  //           this.spinner.hide();
  //         }, 1000);
  //       })
  //     ),
  //   { dispatch: false }
  // );
  sopinneroff$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromAuthActions.loginSuccess,
          fromAuthActions.loginFailure,
          fromAuthActions.logoutResult
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
