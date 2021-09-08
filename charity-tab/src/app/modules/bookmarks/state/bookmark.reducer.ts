import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Bookmark } from './bookmark.model';
import * as BookmarkActions from './bookmark.actions';

export const bookmarksFeatureKey = 'bookmarks';

export interface State extends EntityState<Bookmark> {
  // additional entities state properties
  error: any;
  userId: string | null;
}

export const adapter: EntityAdapter<Bookmark> = createEntityAdapter<Bookmark>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null,
  userId: null,
});

export const reducer = createReducer(
  initialState,
  //Load
  on(BookmarkActions.loadBookmarks, (state, action) => ({
    ...state,
    userId: action.userId,
  })),
  on(BookmarkActions.loadBookmarksSuccess, (state, action) =>
    adapter.setAll(action.bookmarks, state)
  ),

  //Add
  on(BookmarkActions.addBookmarkSuccess, (state, action) =>
    adapter.addOne(action.bookmark, state)
  ),

  //Delete
  on(BookmarkActions.deleteBookmark, (state, action) =>
    adapter.removeOne(action.id, state)
  ),

  //Error
  on(
    BookmarkActions.loadBookmarksFailure,
    BookmarkActions.addBookmarkFailure,
    BookmarkActions.deleteBookmarkFailure,
    (state, action) => ({
      ...state,
      error: action.error,
    })
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
