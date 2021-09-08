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

  //Add Bookmarks API Effect
  addBookmarks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookmarkActions.addBookmark),
      mergeMap((action) =>
        this.bookmarkService
          .createBookmark(action.name, action.link, action.userId)
          .pipe(
            map((data) =>
              BookmarkActions.addBookmarkSuccess({ bookmark: data.bookmark })
            ),
            catchError((error) =>
              of(BookmarkActions.addBookmarkFailure({ error }))
            )
          )
      )
    );
  });

  //Delete Bookmarks API Effect
  deleteBookmarks$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookmarkActions.deleteBookmark),
      mergeMap((action) =>
        this.bookmarkService.deleteBookmark(action.id).pipe(
          map(() => BookmarkActions.deleteBookmarkSuccess()),
          catchError((error) =>
            of(BookmarkActions.deleteBookmarkFailure({ error }))
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
