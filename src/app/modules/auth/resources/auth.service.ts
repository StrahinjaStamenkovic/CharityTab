import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../../resources/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http
      .get(
        `${environment.apiUrl}/users?username=${username}&password=${password}`
      )
      .pipe(
        switchMap((users: any) => {
          let user = <User>users[0];
          if (user) {
            return of(user);
          } else {
            return throwError('Unable to login');
          }
        })
      );
  }
}
