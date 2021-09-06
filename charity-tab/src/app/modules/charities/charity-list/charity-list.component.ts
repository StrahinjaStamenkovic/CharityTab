import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Charity } from 'src/app/modules/charities/state/charity.model';
import { AppState } from 'src/app/store';
import { clearDonation } from 'src/app/store/donate/donate.actions';
import * as fromDonateSelectors from 'src/app/store/donate/donate.selectors';
import * as fromCharityActions from '../state/charity.actions';
import * as CharitySelector from '../state/charity.selectors';
@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss'],
})
export class CharityListComponent implements OnInit {
  faInfoCircle = faInfoCircle;

  vm$: Observable<fromDonateSelectors.DonationResultViewModel> | null = null;
  charities$: Observable<Charity[]> | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.vm$ = this.store.pipe(
      select(fromDonateSelectors.selectDonationResultViewModel)
    );
    this.vm$.subscribe((donationResult) => {
      if (donationResult.status === true)
        $('#donationSuccessfulModal').modal('show');
      else if (donationResult.status === false)
        $('#donationUnsuccessfulModal').modal('show');
    });

    //Dispatch an action to load all charities
    this.store.dispatch(fromCharityActions.loadCharities());

    //Select a slice containing charities from the store
    this.charities$ = this.store.pipe(
      select(CharitySelector.selectAllCharities)
    );
  }

  closeModal() {
    this.store.dispatch(clearDonation());
  }
}
