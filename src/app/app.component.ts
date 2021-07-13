import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from './modules/resources/auth';
import { AppState } from './store';
import { browserReload } from './store/actions/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {}
  title = 'charity-tab';
}
