import { Component, Input, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Charity } from 'src/app/models/charity';
import { AppState } from 'src/app/store';
import { donatingHeartsToCharity } from 'src/app/store/actions/donate.actions';
import { selectAvailableHearts } from 'src/app/store/selectors/charity.selectors';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.scss'],
})
export class CharityComponent implements OnInit {
  @Input() charity: Charity | null = null;
  heart$: Observable<number> | null = null;
  faHeart = faHeart;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.heart$ = this.store.pipe(select(selectAvailableHearts));
  }

  donate(): void {
    if (this.charity) {
      this.store.dispatch(
        donatingHeartsToCharity({
          data: {
            charity: this.charity,
            user: JSON.parse(<string>localStorage.getItem('user')),
            amount: 1,
          },
        })
      );
    }
  }
}
