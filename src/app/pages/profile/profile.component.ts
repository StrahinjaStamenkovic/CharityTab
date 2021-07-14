import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/modules/resources/auth';
import { AppState } from 'src/app/store';
import { browserReload } from 'src/app/store/actions/auth.actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User | null = null;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.user = <User>JSON.parse(<string>localStorage.getItem('user'));
    if (this.user) {
      this.store.dispatch(
        browserReload({
          user: this.user,
        })
      );
    } else this.router.navigate(['/auth/login']);
  }
}
