import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Bookmark } from './bookmark.model';

//Load Bookmarks
export const loadBookmarks = createAction(
  '[Bookmark-List Component] Load All Bookmarks',
  props<{ userId: string }>()
);
export const loadBookmarksSuccess = createAction(
  '[Bookmark-List Effect] Load All Bookmarks Success',
  props<{ bookmarks: Bookmark[] }>()
);
export const loadBookmarksFailure = createAction(
  '[Bookmark-List Effect] Load All Bookmarks Failure',
  props<{ error: any }>()
);

//
/*
export const addBookmark = createAction(
  '[Bookmark/API] Add Bookmark',
  props<{ bookmark: Bookmark }>()
);

export const upsertBookmark = createAction(
  '[Bookmark/API] Upsert Bookmark',
  props<{ bookmark: Bookmark }>()
);

export const addBookmarks = createAction(
  '[Bookmark/API] Add Bookmarks',
  props<{ bookmarks: Bookmark[] }>()
);

export const upsertBookmarks = createAction(
  '[Bookmark/API] Upsert Bookmarks',
  props<{ bookmarks: Bookmark[] }>()
);

export const updateBookmark = createAction(
  '[Bookmark/API] Update Bookmark',
  props<{ bookmark: Update<Bookmark> }>()
);

export const updateBookmarks = createAction(
  '[Bookmark/API] Update Bookmarks',
  props<{ bookmarks: Update<Bookmark>[] }>()
);

export const deleteBookmark = createAction(
  '[Bookmark/API] Delete Bookmark',
  props<{ id: string }>()
);

export const deleteBookmarks = createAction(
  '[Bookmark/API] Delete Bookmarks',
  props<{ ids: string[] }>()
);
*/
export const clearBookmarks = createAction('[Bookmark/API] Clear Bookmarks');
