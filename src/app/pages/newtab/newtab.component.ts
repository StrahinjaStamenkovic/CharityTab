import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/modules/resources/auth';
import { AppState } from 'src/app/store';
import { newTab } from 'src/app/store/actions/app.actions';
import { browserReload } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-newtab',
  templateUrl: './newtab.component.html',
  styleUrls: ['./newtab.component.scss'],
})
export class NewtabComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}
  user: User | null = null;

  ngOnInit(): void {
    this.user = <User>JSON.parse(<string>localStorage.getItem('user'));
    if (this.user) {
      let newUser = {
        ...this.user,
        totalCollectedHearts: this.user.totalCollectedHearts + 1,
        currentAmountOfHearts: this.user.currentAmountOfHearts + 1,
        totalTabsOpened: this.user.totalTabsOpened + 1,
      };
      this.store.dispatch(
        browserReload({
          user: newUser,
        })
      );
      localStorage.setItem('user', JSON.stringify(newUser));
    } else this.router.navigate(['/auth/login']);
  }
}
