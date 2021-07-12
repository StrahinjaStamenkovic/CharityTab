import { Component, OnInit } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  faChartBar = faChartBar;
  constructor() {}

  ngOnInit(): void {}
}
