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

//Add Bookmarks
export const addBookmark = createAction(
  '[Bookmark Add Component] Add Bookmark',
  props<{ name: string; link: string; userId: string }>()
);
export const addBookmarkSuccess = createAction(
  '[Bookmark Effect] Add Bookmark Success',
  props<{ bookmark: Bookmark }>()
);
export const addBookmarkFailure = createAction(
  '[Bookmark Effect] Add Bookmark Failure',
  props<{ error: any }>()
);

//Delete
export const deleteBookmark = createAction(
  '[Bookmark Component] Delete Bookmark',
  props<{ id: string }>()
);
export const deleteBookmarkSuccess = createAction(
  '[Bookmark Effect] Delete Bookmark Effect'
);
export const deleteBookmarkFailure = createAction(
  '[Bookmark Effect] Delete Bookmark Failure',
  props<{ error: any }>()
);

export const clearBookmarks = createAction('[Bookmark/API] Clear Bookmarks');
