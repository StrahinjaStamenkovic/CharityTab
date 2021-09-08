import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Todo } from './todo.model';
import * as TodoActions from './todo.actions';

export const todosFeatureKey = 'todos';

export interface State extends EntityState<Todo> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export const reducer = createReducer(
  initialState,

  //Load
  on(TodoActions.loadTodos, (state, action) => ({
    ...state,
    userId: action.userId,
  })),
  on(TodoActions.loadTodosSuccess, (state, action) =>
    adapter.setAll(action.todos, state)
  ),

  //Add
  on(TodoActions.addTodoSuccess, (state, action) =>
    adapter.addOne(action.todo, state)
  ),

  //Update
  on(TodoActions.upsertTodoSuccess, (state, action) =>
    adapter.upsertOne(action.todo, state)
  ),

  //Delete
  on(TodoActions.deleteTodo, (state, action) =>
    adapter.removeOne(action.id, state)
  ),

  //Error
  on(
    TodoActions.loadTodosFailure,
    TodoActions.addTodoFailure,
    TodoActions.upsertTodoFailure,
    TodoActions.deleteTodoFailure,
    (state, action) => ({
      ...state,
      error: action.error,
    })
  ),

  on(TodoActions.clearTodos, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
