import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Todo } from './todo.model';

//Load Todos
export const loadTodos = createAction(
  '[Todo-List Component] Load All Todos',
  props<{ userId: string }>()
);
export const loadTodosSuccess = createAction(
  '[Todo-List Effect] Load All Todos Success',
  props<{ todos: Todo[] }>()
);
export const loadTodosFailure = createAction(
  '[Todo-List Effect] Load All Todos Failure',
  props<{ error: any }>()
);

//Add Todos
export const addTodo = createAction(
  '[Todo Add Component] Add Todo',
  props<{ task: string; userId: string }>()
);
export const addTodoSuccess = createAction(
  '[Todo Effect] Add Todo Success',
  props<{ todo: Todo }>()
);
export const addTodoFailure = createAction(
  '[Todo Effect] Add Todo Failure',
  props<{ error: any }>()
);

//Update/Upsert todo
export const upsertTodo = createAction(
  '[Todo Component] Upsert Todo',
  props<{ todo: Todo }>()
);
export const upsertTodoSuccess = createAction(
  '[Todo Effect] Upsert Todo Success',
  props<{ todo: Todo }>()
);
export const upsertTodoFailure = createAction(
  '[Todo Effect] Upsert Todo Failure',
  props<{ error: any }>()
);

//Delete
export const deleteTodo = createAction(
  '[Todo Component] Delete Todo',
  props<{ id: string }>()
);
export const deleteTodoSuccess = createAction(
  '[Todo Effect] Delete Todo Effect'
);
export const deleteTodoFailure = createAction(
  '[Todo Effect] Delete Todo Failure',
  props<{ error: any }>()
);

export const clearTodos = createAction('[Todo/API] Clear Todos');
