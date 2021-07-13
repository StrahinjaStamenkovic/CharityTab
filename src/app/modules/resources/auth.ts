import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Bookmark } from 'src/app/models/bookmark';
import { Note } from 'src/app/models/note';
import { ToDo } from 'src/app/models/toDo';

export interface User {
  id: number | null;
  name: string | null;
  lastName: string | null;
  username: string | null;
  password: string | null;
  isAdming: boolean;
  bookmarks: Array<Bookmark>;
  notes: Array<Note>;
  toDo: Array<ToDo>;
  totalCollectedHearts: number;
  currentAmountOfHearts: number;
  totalMoneyDonated: number;
  totalHeartsDonated: number;
  totalTabsOpened: number;
  dateJoined: string | null;
  //prefered search engine
}

export var UserModel: User = {
  id: null,
  name: null,
  lastName: null,
  username: null,
  password: null,
  isAdming: false,
  bookmarks: [],
  notes: [],
  toDo: [],
  totalCollectedHearts: 0,
  currentAmountOfHearts: 0,
  totalMoneyDonated: 0,
  totalHeartsDonated: 0,
  totalTabsOpened: 0,
  dateJoined: null,
};
