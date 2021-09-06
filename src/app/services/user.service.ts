import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../modules/auth/resources/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  updateOne(user: User): Observable<boolean> {
    console.log(user);
    return this.httpClient
      .patch<User>(`${environment.apiUrl}/users/${user.id}`, { ...user })
      .pipe(switchMap((user) => of(user ? true : false)));
    //.pipe(catchError(this.handleError));
  }
}
