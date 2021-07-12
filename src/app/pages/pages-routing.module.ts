import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from '../shared/account/account.component';
import { CharityListComponent } from '../shared/charity-list/charity-list.component';
import { StatsComponent } from '../shared/stats/stats.component';
import { NewtabComponent } from './newtab/newtab.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'newtab', component: NewtabComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'stats', component: StatsComponent },
      { path: 'donate', component: CharityListComponent },
      { path: 'account', component: AccountComponent },
    ],
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '', redirectTo: 'newtab', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
