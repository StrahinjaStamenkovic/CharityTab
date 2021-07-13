import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertService } from 'ngx-alerts';
import { tap } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';

@Injectable()
export class AlertEffects {
  constructor(private actions$: Actions, private alertService: AlertService) {}
  checkingCredential$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginPage),
        tap(() => this.alertService.info('Checking your credentials'))
      ),
    { dispatch: false }
  );
  welcomeBack$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap((action) =>
          this.alertService.success(`Welcome Back ${action.user.username}!`)
        )
      ),
    { dispatch: false }
  );
  unableToLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginFailure),
        tap(() => this.alertService.warning('Unable to login'))
      ),
    { dispatch: false }
  );

  youAreLoggedOut$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => this.alertService.warning("You're logged out"))
      ),
    { dispatch: false }
  );
  comeBackSoon$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() =>
          setTimeout(() => {
            this.alertService.info('Come Back Soon');
          }, 2000)
        )
      ),
    { dispatch: false }
  );
}
