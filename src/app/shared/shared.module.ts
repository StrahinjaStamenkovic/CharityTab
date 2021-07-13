import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharityComponent } from './charity/charity.component';
import { CharityListComponent } from './charity-list/charity-list.component';
import { HeaderComponent } from './header/header.component';
import { TimeComponent } from './time/time.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { ProfileNavigationComponent } from './profile-navigation/profile-navigation.component';
import { StatsComponent } from './stats/stats.component';
import { AccountComponent } from './account/account.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    CharityComponent,
    CharityListComponent,
    HeaderComponent,
    TimeComponent,
    BookmarkComponent,
    BookmarkListComponent,
    ProfileHeaderComponent,
    ProfileNavigationComponent,
    StatsComponent,
    AccountComponent,
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule, StoreModule],
  exports: [
    CharityComponent,
    CharityListComponent,
    HeaderComponent,
    TimeComponent,
    BookmarkComponent,
    BookmarkListComponent,
    ProfileHeaderComponent,
    ProfileNavigationComponent,
    StatsComponent,
    AccountComponent,
  ],
})
export class SharedModule {}
