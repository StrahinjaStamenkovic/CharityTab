import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as BookmarkReducer from './bookmark.reducer';

export const selectBookmarksState =
  createFeatureSelector<BookmarkReducer.State>(
    BookmarkReducer.bookmarksFeatureKey
  );

export const selectAllBookmarks = createSelector(
  selectBookmarksState,
  BookmarkReducer.selectAll
);
