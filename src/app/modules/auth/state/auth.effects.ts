import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import * as AuthActions from './auth.actions';
import { AuthService } from 'src/app/modules/auth/resources/auth.service';
import { UserService } from 'src/app/services/user.service';

@Injectable()
export class AuthEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginPage),
      concatMap((action) =>
        this.authService.login(action.username, action.password).pipe(
          map((user) => AuthActions.loginSuccess({ user })),
          catchError((error) => of(AuthActions.loginFailure({ error })))
        )
      )
    );
  });

  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.registerPage),
      concatMap((action) =>
        this.authService
          .register(
            action.name,
            action.lastName,
            action.username,
            action.password
          )
          .pipe(
            map((user) => AuthActions.registerSuccess({ user })),
            catchError((error) => of(AuthActions.registerFailure({ error })))
          )
      )
    );
  });

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      concatMap((action) => {
        console.log(action);
        console.log(action.user);
        return this.userService.updateOne({ ...action.user }).pipe(
          map((result) => AuthActions.logoutSuccess({ result })),
          catchError((error) => of(AuthActions.logoutFailure({ error })))
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private userService: UserService
  ) {}
}
