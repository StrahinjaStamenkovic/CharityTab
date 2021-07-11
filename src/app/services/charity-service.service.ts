import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Charity } from '../models/charity';

@Injectable({
  providedIn: 'root',
})
export class CharityService {
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Charity[]> {
    return this.httpClient.get<Charity[]>(environment.apiUrl + '/charities');
  }
  getOne(id: number): Observable<Charity> {
    return this.httpClient.get<Charity>(
      `${environment.apiUrl}/charities/${id}`
    );
  }
}
