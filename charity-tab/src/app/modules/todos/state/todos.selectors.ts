import { createSelector } from '@ngrx/store';
import { Todo } from 'src/app/modules/todos/state/todo.model';
import { selectAuthState } from '../../auth/state/auth.selectors';
import * as fromAuth from '../../auth/state/auth.reducer';

export const selectToDos = createSelector(
  selectAuthState,
  (state: fromAuth.State): Todo[] => [] //state.user.toDo
);
