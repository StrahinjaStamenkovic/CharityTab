import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { BookmarkService } from 'src/app/services/bookmark.service';
import * as BookmarkActions from './bookmark.actions';

@Injectable()
export class BookmarkEffects {
  //Load Bookmarks API Effect
  loadBookmarks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookmarkActions.loadBookmarks),
      mergeMap((action) =>
        this.bookmarkService.getAllForUser(action.userId).pipe(
          map((data) =>
            BookmarkActions.loadBookmarksSuccess({ bookmarks: data })
          ),
          catchError((error) =>
            of(BookmarkActions.loadBookmarksFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private bookmarkService: BookmarkService
  ) {}
}
