import { Component, Input, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Bookmark } from 'src/app/modules/bookmarks/state/bookmark.model';
import { AppState } from 'src/app/store';
import { deleteBookmark } from '../state/bookmark.actions';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  @Input() bookmark: Bookmark | null = null;
  faDeleteIcon = faTimesCircle;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  delete() {
    if (this.bookmark)
      this.store.dispatch(deleteBookmark({ id: this.bookmark.id }));
  }
}
