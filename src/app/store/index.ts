import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromDonate from './donate/donate.reducer';
import * as fromAuth from '../modules/auth/state/auth.reducer';
import * as fromBookmark from '../modules/bookmarks/state/bookmark.reducer';
import * as fromCharity from '../modules/charities/state/charity.reducer';
import * as fromNote from '../modules/notes/state/note.reducer';
import * as fromTodo from '../modules/todos/state/todo.reducer';

export interface AppState {
  [fromDonate.donateFeatureKey]: fromDonate.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
  [fromBookmark.bookmarksFeatureKey]: fromBookmark.State;
  [fromCharity.charitiesFeatureKey]: fromCharity.State;
  [fromNote.notesFeatureKey]: fromNote.State;
  [fromTodo.todosFeatureKey]: fromTodo.State;
}

export const reducers: ActionReducerMap<AppState> = {
  [fromDonate.donateFeatureKey]: fromDonate.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
  [fromBookmark.bookmarksFeatureKey]: fromBookmark.reducer,
  [fromCharity.charitiesFeatureKey]: fromCharity.reducer,
  [fromNote.notesFeatureKey]: fromNote.reducer,
  [fromTodo.todosFeatureKey]: fromTodo.reducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
