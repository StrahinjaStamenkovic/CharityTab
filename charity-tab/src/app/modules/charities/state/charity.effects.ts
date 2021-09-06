import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { CharityService } from 'src/app/services/charity.service';
import * as CharityActions from './charity.actions';

@Injectable()
export class CharityEffects {
  //Load Charities API Effect
  loadCharities$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CharityActions.loadCharities),
      mergeMap(() =>
        this.charityService.getAll().pipe(
          map((data) =>
            CharityActions.loadCharitiesSuccess({ charities: data })
          ),
          catchError((error) =>
            of(CharityActions.loadCharitiesFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private charityService: CharityService
  ) {}
}
