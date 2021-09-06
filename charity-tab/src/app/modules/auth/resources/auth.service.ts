import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User, UserModel } from './auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<User> {
    return this.http
      .get(
        `${environment.apiUrl}/users/login/username=${username}&password=${password}`
      )
      .pipe(
        map((response: any): User => {
          if (response.statusCode !== 200) throwError('Unable to login');
          //const user: User = { ...response, id: response._id };
          return <User>{
            id: response.user._id,
            name: response.user.name,
            lastName: response.user.lastName,
            username: response.user.username,
            password: response.user.password,
            isAdmin: response.user.isAdmin,
            // bookmarks: [],
            // notes: [],
            // toDo: [],
            totalCollectedHearts: response.user.totalCollectedHearts,
            currentAmountOfHearts: response.user.currentAmountOfHearts,
            totalMoneyDonated: response.user.totalMoneyDonated,
            totalHeartsDonated: response.user.totalHeartsDonated,
            totalTabsOpened: response.user.totalTabsOpened,
            dateJoined: response.user.dateJoined,
          };
        })
      );
  }

  register(
    name: string,
    lastName: string,
    username: string,
    password: string
  ): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/users/username/${username}`)
      .pipe(
        switchMap((response: any) => {
          //let user = <User>users;
          console.log(response);
          if (response.status === 'Taken')
            return throwError(`Username ${username} is already taken!`);
          return this.http.post(`${environment.apiUrl}/users`, {
            ...UserModel,
            name,
            lastName,
            username,
            password,
            dateJoined: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`,
          });
        })
      );
  }
}
