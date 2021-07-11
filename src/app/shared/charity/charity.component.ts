import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Charity } from 'src/app/models/charity';
import { AppState } from 'src/app/store';
import { donatingHeartsToCharity } from 'src/app/store/actions/donate.actions';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.scss'],
})
export class CharityComponent implements OnInit {
  @Input() charity: Charity | null = null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  donate(): void {
    if (this.charity) {
      this.store.dispatch(
        donatingHeartsToCharity({
          data: {
            name: this.charity.name,
            //id: 123,
            amount: 1,
          },
        })
      );
    }
  }
}
