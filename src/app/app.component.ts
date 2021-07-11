import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  user: null;
  constructor(private router: Router) {}
  ngOnInit(): void {
    // if (!this.user) {
    //   this.router.navigate(['/login']);
    // }
  }
  title = 'charity-tab';
}
