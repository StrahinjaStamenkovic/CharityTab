import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as NoteReducer from './note.reducer';

export const selectNotesState = createFeatureSelector<NoteReducer.State>(
  NoteReducer.notesFeatureKey
);

export const selectAllNotes = createSelector(
  selectNotesState,
  NoteReducer.selectAll
);
