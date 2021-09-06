import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/modules/todos/state/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  @Input() todo: Todo | null = null;
  constructor() {}

  ngOnInit(): void {}
}
