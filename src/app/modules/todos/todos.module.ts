import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromTodo from './state/todo.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './state/todo.effects';

@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    StoreModule.forFeature(fromTodo.todosFeatureKey, fromTodo.reducer),
    EffectsModule.forFeature([TodoEffects]),
  ],
  exports: [TodoComponent, TodoListComponent],
})
export class TodosModule {}
