import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Note } from '../modules/notes/state/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private httpClient: HttpClient) {}

  createNote(
    text: string,
    userId: string
  ): Observable<{ statusCode: number; note: Note }> {
    const dateAdded: string = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;

    console.log(dateAdded, userId);

    return this.httpClient.post<{ statusCode: number; note: Note }>(
      `${environment.apiUrl}/notes`,
      {
        text,
        dateAdded,
        userId,
      }
    );
  }

  getAllForUser(userId: string): Observable<Note[]> {
    return this.httpClient
      .get<{ statusCode: Number; notes: Note[] }>(
        `${environment.apiUrl}/notes/userId=${userId}`
      )
      .pipe(map((response) => response.notes));
    //.pipe(catchError(this.handleError));
  }

  deleteNote(id: string) {
    return this.httpClient.delete(`${environment.apiUrl}/notes/${id}`);
  }
}
