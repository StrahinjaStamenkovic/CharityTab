import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'server/dist/src/users/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NotesService {
  constructor(private httpClient: HttpClient) {}

  createNote(name: string, text: string) {
    const dateAdded: string = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
    const userId = (<User>JSON.parse(<string>localStorage.getItem('user'))).id;

    console.log(dateAdded, userId);

    this.httpClient
      .post(`${environment.apiUrl}/notes`, {
        name,
        text,
        dateAdded,
        userId,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }
}
