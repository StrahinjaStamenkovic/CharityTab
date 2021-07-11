import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Charity } from 'src/app/models/charity';
import { CharityService } from 'src/app/services/charity-service.service';

@Component({
  selector: 'app-charity-list',
  templateUrl: './charity-list.component.html',
  styleUrls: ['./charity-list.component.scss'],
})
export class CharityListComponent implements OnInit {
  charities: Observable<Charity[]> = of([]);
  constructor(private charityService: CharityService) {}

  ngOnInit(): void {
    this.charities = this.charityService.getAll();
  }
}
