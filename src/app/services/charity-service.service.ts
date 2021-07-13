import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Charity } from '../models/charity';
import { CharityDonation } from '../models/charity-donation';

@Injectable({
  providedIn: 'root',
})
export class CharityService {
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<Charity[]> {
    return this.httpClient.get<Charity[]>(environment.apiUrl + '/charities');
    //.pipe(catchError(this.handleError));
  }
  getOne(id: number): Observable<Charity> {
    return this.httpClient.get<Charity>(
      `${environment.apiUrl}/charities/${id}`
    );
    //.pipe(catchError(this.handleError));
  }
  updateOne(charity: Charity): Observable<Charity> {
    return this.httpClient.put<Charity>(
      `${environment.apiUrl}/charities/${charity.id}`,
      charity
    );
    //.pipe(catchError(this.handleError));
  }

  handleError(err: any, caught: Observable<any>): ObservableInput<any> {
    console.log(`[Get Charity] :: ${err} :: ${caught}`);
    return caught;
  }
  donateToCharity(charityDonation: CharityDonation): Observable<boolean> {
    // charityDonation.charity.totalHeartsDonated += charityDonation.amount;
    // charityDonation.charity.totalMoneyRaised += charityDonation.amount * 0.1;
    let updatedCharity: Charity = {
      ...charityDonation.charity,
      totalHeartsDonated:
        charityDonation.charity.totalHeartsDonated + charityDonation.amount,
      totalMoneyRaised:
        charityDonation.charity.totalMoneyRaised +
        charityDonation.amount * 0.01,
    };
    console.log(updatedCharity);
    return this.updateOne(updatedCharity).pipe(
      switchMap((charity: Charity) => {
        return of(charity !== null);
      })
    );

    //return of(true);
  }
}
