import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as TodoReducer from './todo.reducer';

export const selectTodosState = createFeatureSelector<TodoReducer.State>(
  TodoReducer.todosFeatureKey
);

export const selectAllTodos = createSelector(
  selectTodosState,
  TodoReducer.selectAll
);
