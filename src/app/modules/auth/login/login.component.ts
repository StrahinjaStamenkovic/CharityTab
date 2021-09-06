import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromAuthActions from 'src/app/modules/auth/state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faSignInAlt = faSignInAlt;

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    let user = localStorage.getItem('user');
    if (user) this.router.navigate(['/newtab']);
  }

  onSubmit(f: NgForm) {
    console.log(f.value.username, f.value.password);

    this.store.dispatch(
      fromAuthActions.loginPage({
        username: f.value.username,
        password: f.value.password,
      })
    );

    return false;
  }
  togglePasswordVisibility() {
    const x: HTMLInputElement = <HTMLInputElement>(
      document.getElementById('passwordlogin')
    );
    x.type = x.type === 'password' ? 'text' : 'password';
  }
}
