import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { Store, select } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Charity } from 'src/app/models/charity';
import { CharityService } from 'src/app/services/charity-service.service';
import { clearDonation } from 'src/app/store/actions/donate.actions';
import * as fromDonateSelectors from 'src/app/store/selectors/donate.selectors';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss'],
})
export class CharityListComponent implements OnInit {
  charities: Observable<Charity[]> = of([]);
  faInfoCircle = faInfoCircle;
  vm$: Observable<fromDonateSelectors.DonationResultViewModel> | undefined;
  constructor(private charityService: CharityService, private store: Store) {}

  ngOnInit(): void {
    this.charities = this.charityService.getAll();
    this.vm$ = this.store.pipe(
      select(fromDonateSelectors.selectDonationResultViewModel)
    );
    this.vm$.subscribe((donationResult) => {
      if (donationResult.status === true)
        $('#donationSuccessfulModal').modal('show');
      else if (donationResult.status === false)
        $('#donationUnsuccessfulModal').modal('show');
    });
  }

  closeModal() {
    this.store.dispatch(clearDonation());
  }
}
