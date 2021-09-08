import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  faCheckCircle,
  faPlusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/modules/todos/state/todo.model';
import { AppState } from 'src/app/store';
import * as fromToDosSelector from 'src/app/modules/todos/state/todos.selectors';
import * as fromTodosActions from 'src/app/modules/todos/state/todo.actions';
import { TodoService } from 'src/app/services/todo.service';
import { selectUserId } from '../../auth/state/auth.selectors';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  todo$: Observable<Todo[]> | null = null;

  faCirclePlus = faPlusCircle;
  faCircleCheck = faCheckCircle;
  faCircleX = faTimesCircle;

  controlVisibility = true;
  inputVisibility = false;

  userId!: string | null;

  constructor(
    private store: Store<AppState>,
    private todosService: TodoService
  ) {}

  ngOnInit(): void {
    this.store
      .pipe(select(selectUserId))
      .subscribe((userId) => (this.userId = userId));

    //Dispatch an action to load all notes for a given userId
    if (this.userId)
      this.store.dispatch(fromTodosActions.loadTodos({ userId: this.userId }));

    this.todo$ = this.store.pipe(select(fromToDosSelector.selectAllTodos));
  }

  onSubmit(f: NgForm) {
    console.log(f.value.task);
    this.toggleForm();
    if (this.userId)
      this.store.dispatch(
        fromTodosActions.addTodo({ task: f.value.task, userId: this.userId })
      );
  }

  toggleForm() {
    this.controlVisibility = !this.controlVisibility;
    this.inputVisibility = !this.inputVisibility;
  }
}
