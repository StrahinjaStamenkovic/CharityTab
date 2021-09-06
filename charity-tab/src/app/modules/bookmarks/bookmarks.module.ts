import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { BookmarkListComponent } from './bookmark-list/bookmark-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import * as fromBookmark from './state/bookmark.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookmarkEffects } from './state/bookmark.effects';

@NgModule({
  declarations: [BookmarkComponent, BookmarkListComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule, StoreModule.forFeature(fromBookmark.bookmarksFeatureKey, fromBookmark.reducer), EffectsModule.forFeature([BookmarkEffects])],
  exports: [BookmarkComponent, BookmarkListComponent],
})
export class BookmarksModule {}
