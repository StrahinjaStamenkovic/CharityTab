import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/modules/todos/state/todo.model';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { AppState } from 'src/app/store';
import { Store } from '@ngrx/store';
import { deleteTodo, upsertTodo } from '../state/todo.actions';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo | null = null;
  faDeleteIcon = faTimesCircle;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  delete() {
    if (this.todo) this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }

  changeStatus() {
    if (this.todo) {
      const updatedTodo: Todo = { ...this.todo, status: !this.todo.status };
      console.log(updatedTodo);
      this.store.dispatch(upsertTodo({ todo: updatedTodo }));
    }
  }
}
