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
  on(BookmarkActions.loadBookmarks, (state, action) => ({
    ...state,
    userId: state.userId,
  })),
  on(BookmarkActions.loadBookmarksSuccess, (state, action) =>
    adapter.setAll(action.bookmarks, state)
  ),
  on(BookmarkActions.loadBookmarksFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
  /*
  on(BookmarkActions.addBookmark,
    (state, action) => adapter.addOne(action.bookmark, state)
  ),
  on(BookmarkActions.upsertBookmark,
    (state, action) => adapter.upsertOne(action.bookmark, state)
  ),
  on(BookmarkActions.addBookmarks,
    (state, action) => adapter.addMany(action.bookmarks, state)
  ),
  on(BookmarkActions.upsertBookmarks,
    (state, action) => adapter.upsertMany(action.bookmarks, state)
  ),
  on(BookmarkActions.updateBookmark,
    (state, action) => adapter.updateOne(action.bookmark, state)
  ),
  on(BookmarkActions.updateBookmarks,
    (state, action) => adapter.updateMany(action.bookmarks, state)
  ),
  on(BookmarkActions.deleteBookmark,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(BookmarkActions.deleteBookmarks,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(BookmarkActions.loadBookmarks,
    (state, action) => adapter.setAll(action.bookmarks, state)
  ),
  on(BookmarkActions.clearBookmarks,
    state => adapter.removeAll(state)
  ),
  */
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
