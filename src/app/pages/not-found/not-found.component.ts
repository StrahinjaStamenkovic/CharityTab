import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/modules/resources/auth';
import { AppState } from 'src/app/store';
import { browserReload } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  user: User | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.user = <User>JSON.parse(<string>localStorage.getItem('user'));
    this.store.dispatch(
      browserReload({
        user: this.user,
      })
    );
  }
}
