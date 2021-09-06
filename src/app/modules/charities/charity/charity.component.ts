import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Charity } from 'src/app/modules/charities/state/charity.model';
import { AppState } from 'src/app/store';
import { donatingHeartsToCharity } from 'src/app/store/donate/donate.actions';
import { selectAvailableHearts } from 'src/app/modules/charities/state/charity.selectors';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.scss'],
})
export class CharityComponent implements OnInit {
  faHeart = faHeart;

  @Input() charity: Charity | null = null;
  heart$: Observable<number> | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.heart$ = this.store.pipe(select(selectAvailableHearts));
  }

  donate(hearts: number): void {
    if (this.charity) {
      this.store.dispatch(
        donatingHeartsToCharity({
          data: {
            charity: this.charity,
            user: JSON.parse(<string>localStorage.getItem('user')),
            amount: hearts,
          },
        })
      );
    }
  }
}
