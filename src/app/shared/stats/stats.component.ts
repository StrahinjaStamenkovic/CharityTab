import { Component, OnInit } from '@angular/core';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import * as fromStatsSelectors from 'src/app/store/selectors/stats.selectors';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
})
export class StatsComponent implements OnInit {
  faChartBar = faChartBar;

  vm$: Observable<fromStatsSelectors.StatsViewModel> | null = null;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.vm$ = this.store.pipe(select(fromStatsSelectors.selectStatsViewModel));
  }
}
