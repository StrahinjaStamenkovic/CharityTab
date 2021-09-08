import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { TodoService } from 'src/app/services/todo.service';
import * as TodoActions from './todo.actions';
@Injectable()
export class TodoEffects {
  //Load Todos API Effect
  loadTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      mergeMap((action) =>
        this.todoService.getAllForUser(action.userId).pipe(
          map((data) => TodoActions.loadTodosSuccess({ todos: data })),
          catchError((error) => of(TodoActions.loadTodosFailure({ error })))
        )
      )
    );
  });

  //Add Todos API Effect
  addTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.addTodo),
      mergeMap((action) =>
        this.todoService.createTodo(action.task, action.userId).pipe(
          map((data) => TodoActions.addTodoSuccess({ todo: data.todo })),
          catchError((error) => of(TodoActions.addTodoFailure({ error })))
        )
      )
    );
  });

  //Update Todos API Effect
  updateTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.upsertTodo),
      mergeMap((action) =>
        this.todoService.editTodo(action.todo).pipe(
          map((data) => TodoActions.upsertTodoSuccess({ todo: action.todo })),
          catchError((error) => of(TodoActions.upsertTodoFailure({ error })))
        )
      )
    );
  });

  //Delete Todos API Effect
  deleteTodos$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(TodoActions.deleteTodo),
      mergeMap((action) =>
        this.todoService.deleteTodo(action.id).pipe(
          map(() => TodoActions.deleteTodoSuccess()),
          catchError((error) => of(TodoActions.deleteTodoFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
