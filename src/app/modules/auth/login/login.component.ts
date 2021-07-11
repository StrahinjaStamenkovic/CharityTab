import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faSignInAlt = faSignInAlt;
  constructor() {}

  ngOnInit(): void {}
  onSubmit(f: NgForm) {}
}
