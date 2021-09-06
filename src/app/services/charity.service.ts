import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Charity } from '../modules/charities/state/charity.model';
import { CharityDonation } from '../modules/charities/state/charity-donation';

@Injectable({
  providedIn: 'root',
})
export class CharityService {
  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Charity[]> {
    return this.httpClient
      .get<{ statusCode: Number; charities: Charity[] }>(
        `${environment.apiUrl}/charities`
        // { observe: 'response' }
      )
      .pipe(map((response) => response.charities));
    //.pipe(catchError(this.handleError));
  }

  getOne(id: number): Observable<Charity> {
    return this.httpClient
      .get<{ statusCode: Number; charity: Charity }>(
        `${environment.apiUrl}/charities/${id}`
      )
      .pipe(map((response) => response.charity));
    //.pipe(catchError(this.handleError));
  }

  updateOne(charity: Charity): Observable<Charity> {
    return this.httpClient.patch<Charity>(
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
    console.log(charityDonation);
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
  }
}
