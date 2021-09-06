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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.todo$ = this.store.pipe(
      select(fromToDosSelector.selectToDos)
      // tap((bookmarks) => console.log(bookmarks))
    );
  }
  onSubmit(f: NgForm) {}
  toggleForm() {
    this.controlVisibility = !this.controlVisibility;
    this.inputVisibility = !this.inputVisibility;
  }
}
