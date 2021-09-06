import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TimeComponent } from './time/time.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { StatsComponent } from './stats/stats.component';
import { AccountComponent } from './account/account.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    TimeComponent,
    ProfileHeaderComponent,
    ProfileNavigationComponent,
    StatsComponent,
    AccountComponent,
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    StoreModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    TimeComponent,
    ProfileHeaderComponent,
    ProfileNavigationComponent,
    StatsComponent,
    AccountComponent,
  ],
})
export class SharedModule {}
