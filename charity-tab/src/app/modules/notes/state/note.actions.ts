import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Note } from './note.model';

//Load Notes
export const loadNotes = createAction(
  '[Note-List Component] Load All Notes',
  props<{ userId: string }>()
);
export const loadNotesSuccess = createAction(
  '[Note-List Effect] Load All Notes Success',
  props<{ notes: Note[] }>()
);
export const loadNotesFailure = createAction(
  '[Note-List Effect] Load All Notes Failure',
  props<{ error: any }>()
);

//Add Notes
export const addNote = createAction(
  '[Note Add Component] Add Note',
  props<{ text: string; userId: string }>()
);
export const addNoteSuccess = createAction(
  '[Note Effect] Add Note Success',
  props<{ note: Note }>()
);
export const addNoteFailure = createAction(
  '[Note Effect] Add Note Failure',
  props<{ error: any }>()
);

//Delete
export const deleteNote = createAction(
  '[Note Component] Delete Note',
  props<{ id: string }>()
);
export const deleteNoteSuccess = createAction(
  '[Note Effect] Delete Note Effect'
);
export const deleteNoteFailure = createAction(
  '[Note Effect] Delete Note Failure',
  props<{ error: any }>()
);

export const clearNotes = createAction('[Note/API] Clear Notes');
