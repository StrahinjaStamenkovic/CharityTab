import { Bookmark } from 'src/app/models/bookmark';
import { Note } from 'src/app/models/note';
import { ToDo } from 'src/app/models/toDo';

export interface User {
  id: number | null;
  name: string | null;
  lastName: string | null;
  username: string | null;
  password: string | null;
  isAdming: boolean | null;
  bookmarks: Array<Bookmark> | null;
  notes: Array<Note> | null;
  toDo: Array<ToDo> | null;
  totalCollectedHearts: number | null;
  currentAmountOfHearts: number | null;
  totalMoneyDonated: number | null;
  totalTabsOpened: number | null;
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
  bookmarks: null,
  notes: null,
  toDo: null,
  totalCollectedHearts: null,
  currentAmountOfHearts: null,
  totalMoneyDonated: null,
  totalTabsOpened: null,
  dateJoined: null,
};
