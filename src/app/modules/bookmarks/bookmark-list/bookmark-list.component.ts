import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  faCheckCircle,
  faPlusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Bookmark } from 'src/app/modules/bookmarks/state/bookmark.model';
import { BookmarkService } from 'src/app/services/bookmark.service';
import { AppState } from 'src/app/store';
import * as fromBookmarksSelector from 'src/app/modules/bookmarks/state/bookmarks.selectors';
import { selectUserId } from '../../auth/state/auth.selectors';
import * as fromBookmarkActions from '../state/bookmark.actions';

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.scss'],
})
export class BookmarkListComponent implements OnInit {
  bookmark$: Observable<Bookmark[]> | null = null;

  faCirclePlus = faPlusCircle;
  faCircleCheck = faCheckCircle;
  faCircleX = faTimesCircle;

  controlVisibility: boolean = true;
  inputVisibility: boolean = false;

  userId$!: Observable<string | null>;
  constructor(
    private store: Store<AppState>,
    private bookmarkService: BookmarkService
  ) {}

  ngOnInit(): void {
    this.userId$ = this.store.pipe(select(selectUserId));

    //Dispatch an action to load all bookmarks for a given userId
    this.userId$.subscribe((userId) => {
      if (userId)
        this.store.dispatch(fromBookmarkActions.loadBookmarks({ userId }));
    });

    this.bookmark$ = this.store.pipe(
      select(fromBookmarksSelector.selectAllBookmarks)
    );
  }

  toggleForm() {
    this.controlVisibility = !this.controlVisibility;
    this.inputVisibility = !this.inputVisibility;
    //console.log(this.controlVisibility, this.inputVisibility);
  }

  onSubmit(f: NgForm) {
    console.log(f.value.name, f.value.url);
    this.toggleForm();
    this.bookmarkService.createBookmark(f.value.name, f.value.url);
  }
}
