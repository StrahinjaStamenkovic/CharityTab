import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewtabComponent } from './newtab/newtab.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'newtab', component: NewtabComponent },
  { path: 'profile', component: ProfileComponent },
  { path: '', redirectTo: 'newtab', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
