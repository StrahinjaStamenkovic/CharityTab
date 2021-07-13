import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { User } from 'src/app/modules/resources/auth';
import { UserService } from 'src/app/services/user.service';
import { newTab } from '../actions/app.actions';
import * as fromAuthActions from '../actions/auth.actions';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private userService: UserService) {}
  removeUserFromLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logout),
        tap(() => {
          let user: User = JSON.parse(<string>localStorage.getItem('user'));
          console.log(user);
          this.userService.updateOne(user);
          localStorage.removeItem('user');
        })
      ),
    { dispatch: false }
  );
  addUserToLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.loginSuccess),
        tap((action) =>
          localStorage.setItem('user', JSON.stringify(action.user))
        )
      ),
    { dispatch: false }
  );
  updateDataInLocalStorage$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(newTab)
        //tap(() => localStorage.setItem('user', JSON.stringify('')))
      ),
    {
      dispatch: false,
    }
  );
}
