import { Action, createReducer, on } from '@ngrx/store';
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
  on(TodoActions.addTodo, (state, action) =>
    adapter.addOne(action.todo, state)
  ),
  on(TodoActions.upsertTodo, (state, action) =>
    adapter.upsertOne(action.todo, state)
  ),
  on(TodoActions.addTodos, (state, action) =>
    adapter.addMany(action.todos, state)
  ),
  on(TodoActions.upsertTodos, (state, action) =>
    adapter.upsertMany(action.todos, state)
  ),
  on(TodoActions.updateTodo, (state, action) =>
    adapter.updateOne(action.todo, state)
  ),
  on(TodoActions.updateTodos, (state, action) =>
    adapter.updateMany(action.todos, state)
  ),
  on(TodoActions.deleteTodo, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(TodoActions.deleteTodos, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),
  on(TodoActions.loadTodos, (state, action) =>
    adapter.setAll(action.todos, state)
  ),
  on(TodoActions.clearTodos, (state) => adapter.removeAll(state))
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
