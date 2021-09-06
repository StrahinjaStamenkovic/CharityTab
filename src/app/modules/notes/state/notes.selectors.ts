import { createSelector } from '@ngrx/store';
import { Note } from 'src/app/modules/notes/state/note.model';
import { selectAuthState } from '../../auth/state/auth.selectors';
import * as fromAuth from '../../auth/state/auth.reducer';

export const selectNotes = createSelector(
  selectAuthState,
  (state: fromAuth.State): Note[] => [] //state.user.notes
);
