import { Component, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { map, share } from 'rxjs/operators';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {
  time: string = '';
  day: string = '';
  month: string = '';
  dayN: string = '';
  subscription: Subscription | null = null;
  constructor() {}

  ngOnInit(): void {
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe((time) => {
        let timeString = time.toString().split(' ');
        this.day = timeString[0];
        this.month = timeString[1];
        this.dayN = timeString[2];
        this.time = timeString[4].substring(0, 5);
      });
  }
  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
