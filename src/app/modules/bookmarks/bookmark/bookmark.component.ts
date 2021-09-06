import { Component, Input, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/modules/bookmarks/state/bookmark.model';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  @Input() bookmark: Bookmark | null = null;
  constructor() {}

  ngOnInit(): void {}
  redirect() {
    if (this.bookmark) (window as any).open(this.bookmark.link, '_blank');
  }
}
