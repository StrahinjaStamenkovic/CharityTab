import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as fromAuthActions from 'src/app/modules/auth/state/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  userPlus = faUserPlus;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    console.log(f.value.username, f.value.password);
    this.store.dispatch(
      fromAuthActions.registerPage({
        name: f.value.name,
        lastName: f.value.lastName,
        username: f.value.username,
        password: f.value.password,
      })
    );

    // return false;
  }
  togglePasswordVisibility() {
    const x: HTMLInputElement = <HTMLInputElement>(
      document.getElementById('passwordRegister')
    );
    x.type = x.type === 'password' ? 'text' : 'password';
  }
}
