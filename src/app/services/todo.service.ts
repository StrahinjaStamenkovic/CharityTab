import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'server/dist/src/users/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private httpClient: HttpClient) {}

  createTodo(task: string) {
    const dateAdded: string = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
    const userId = (<User>JSON.parse(<string>localStorage.getItem('user'))).id;

    console.log(dateAdded, userId);

    this.httpClient
      .post(`${environment.apiUrl}/notes`, {
        task,
        status: false,
        dateAdded,
        userId,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
