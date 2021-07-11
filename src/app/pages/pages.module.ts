import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { PagesRoutingModule } from './pages-routing.module';
import { FormsModule } from '@angular/forms';
import { NewtabComponent } from './newtab/newtab.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [NewtabComponent, NotFoundComponent, ProfileComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
})
export class PagesModule {}
