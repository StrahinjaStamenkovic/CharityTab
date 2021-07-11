import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/app/models/bookmark';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss'],
})
export class BookmarkComponent implements OnInit {
  bookmark: Bookmark | null = {
    name: 'google',
    link: 'www.google.com',
    dateAdded: Date.now().toString(),
  };
  constructor() {}

  ngOnInit(): void {}
}
