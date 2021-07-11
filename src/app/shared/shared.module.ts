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
  ],
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  exports: [
    CharityComponent,
    CharityListComponent,
    HeaderComponent,
    TimeComponent,
    BookmarkComponent,
    BookmarkListComponent,
    ProfileHeaderComponent,
    ProfileNavigationComponent,
  ],
})
export class SharedModule {}
