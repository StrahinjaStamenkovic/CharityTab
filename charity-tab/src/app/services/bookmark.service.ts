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

  createBookmark(
    name: string,
    link: string,
    userId: string
  ): Observable<{ statusCode: number; bookmark: Bookmark }> {
    const dateAdded: string = `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`;
    console.log(dateAdded, userId);

    return this.httpClient.post<{ statusCode: number; bookmark: Bookmark }>(
      `${environment.apiUrl}/bookmarks`,
      {
        name,
        link,
        dateAdded,
        userId,
      }
    );
  }

  getAllForUser(userId: string): Observable<Bookmark[]> {
    return this.httpClient
      .get<{ statusCode: Number; bookmarks: Bookmark[] }>(
        `${environment.apiUrl}/bookmarks/userId=${userId}`
      )
      .pipe(map((response) => response.bookmarks));
    //.pipe(catchError(this.handleError));
  }

  deleteBookmark(id: string) {
    return this.httpClient.delete(`${environment.apiUrl}/bookmarks/${id}`);
  }
}
