import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AlertService } from 'ngx-alerts';
import { tap } from 'rxjs/operators';
import {
  addBookmarkFailure,
  addBookmarkSuccess,
} from 'src/app/modules/bookmarks/state/bookmark.actions';
import * as fromAuthActions from '../../modules/auth/state/auth.actions';

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

  welcome$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.registerSuccess),
        tap((action) =>
          this.alertService.success(
            `Registration succesful, redirecting you to your home page.\nWelcome Back ${action.user.username}!`
          )
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

  unableToRegister$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.registerFailure),
        tap((error) =>
          this.alertService.warning(
            `Unable to register.\n${error.error.toString()}`
          )
        )
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

  unableToCreateBookmark$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addBookmarkFailure),
        tap(() =>
          setTimeout(() => {
            this.alertService.danger('Unable to create a bookmark');
          }, 2000)
        )
      ),
    { dispatch: false }
  );

  successfulyAddedBookmark$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addBookmarkSuccess),
        tap(() =>
          setTimeout(() => {
            this.alertService.success('Bookmark added successfuly');
          }, 2000)
        )
      ),
    { dispatch: false }
  );
}
