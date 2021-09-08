import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Todo } from '../modules/todos/state/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  createTodo(
    task: string,
    userId: string
  ): Observable<{ statusCode: number; todo: Todo }> {
    const dateAdded: string = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;

    console.log(dateAdded, userId);

    return this.httpClient.post<{ statusCode: number; todo: Todo }>(
      `${environment.apiUrl}/todos`,
      {
        task,
        status: false,
        dateAdded,
        userId,
      }
    );
  }

  getAllForUser(userId: string): Observable<Todo[]> {
    return this.httpClient
      .get<{ statusCode: Number; todos: Todo[] }>(
        `${environment.apiUrl}/todos/userId=${userId}`
      )
      .pipe(map((response) => response.todos));
    //.pipe(catchError(this.handleError));
  }

  editTodo(todo: Todo): Observable<Todo> {
    return this.httpClient
      .patch<{ statusCode: number; todo: Todo }>(
        `${environment.apiUrl}/todos/${todo.id}`,
        {
          task: todo.task,
          status: todo.status,
          dateAdded: todo.dateAdded,
          userId: todo.userId,
        }
      )
      .pipe(map((response) => todo));
  }

  deleteTodo(id: string) {
    return this.httpClient.delete(`${environment.apiUrl}/todos/${id}`);
  }
}
