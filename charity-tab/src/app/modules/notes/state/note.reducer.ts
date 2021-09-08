import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Note } from './note.model';
import * as NoteActions from './note.actions';

export const notesFeatureKey = 'notes';

export interface State extends EntityState<Note> {
  // additional entity state properties
  error: any;
  userId: string | null;
}

export const adapter: EntityAdapter<Note> = createEntityAdapter<Note>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null,
  userId: null,
});

export const reducer = createReducer(
  initialState,

  //Load
  on(NoteActions.loadNotes, (state, action) => ({
    ...state,
    userId: action.userId,
  })),
  on(NoteActions.loadNotesSuccess, (state, action) =>
    adapter.setAll(action.notes, state)
  ),

  //Add
  on(NoteActions.addNoteSuccess, (state, action) =>
    adapter.addOne(action.note, state)
  ),

  //Delete
  on(NoteActions.deleteNote, (state, action) =>
    adapter.removeOne(action.id, state)
  ),

  //Error
  on(
    NoteActions.loadNotesFailure,
    NoteActions.addNoteFailure,
    NoteActions.deleteNoteFailure,
    (state, action) => ({
      ...state,
      error: action.error,
    })
  )
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
