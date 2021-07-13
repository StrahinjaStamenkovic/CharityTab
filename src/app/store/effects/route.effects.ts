import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import * as fromAuthActions from '../actions/auth.actions';

@Injectable()
export class RouteEffects {
  constructor(private actions$: Actions, private router: Router) {}

  goToLoginScreen$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => this.router.navigate(['/auth/login']))
      ),
    { dispatch: false }
  );
  goToNewtab$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap(() => this.router.navigate(['/newtab']))
      ),
    { dispatch: false }
  );
}
