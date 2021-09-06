import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../modules/auth/resources/auth';
import { environment } from 'src/environments/environment';
import { Bookmark } from '../modules/bookmarks/state/bookmark.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  constructor(private httpClient: HttpClient) {}

  createBookmark(name: string, link: string) {
    const dateAdded: string = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
    const userId = (<User>JSON.parse(<string>localStorage.getItem('user'))).id;
    console.log(dateAdded, userId);
    this.httpClient
      .post(`${environment.apiUrl}/bookmarks`, {
        name,
        link,
        dateAdded,
        userId,
      })
      .subscribe((response) => {
        console.log(response);
      });
  }

  getAllForUser(userId: string): Observable<Bookmark[]> {
    return this.httpClient
      .get<{ statusCode: Number; bookmarks: Bookmark[] }>(
        `${environment.apiUrl}/bookmarks/userId=${userId}`
      )
      .pipe(map((response) => response.bookmarks));
    //.pipe(catchError(this.handleError));
  }
}
