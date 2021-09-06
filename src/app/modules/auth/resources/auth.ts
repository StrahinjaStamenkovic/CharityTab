import { Bookmark } from 'src/app/modules/bookmarks/state/bookmark.model';
import { Note } from 'src/app/modules/notes/state/note.model';
import { Todo } from 'src/app/modules/todos/state/todo.model';

export interface User {
  id: string | null;
  name: string | null;
  lastName: string | null;
  username: string | null;
  password: string | null;
  isAdmin: boolean;
  // bookmarks: Array<Bookmark>;
  // notes: Array<Note>;
  // toDo: Array<Todo>;
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
  isAdmin: false,
  // bookmarks: [],
  // notes: [],
  // toDo: [],
  totalCollectedHearts: 0,
  currentAmountOfHearts: 0,
  totalMoneyDonated: 0,
  totalHeartsDonated: 0,
  totalTabsOpened: 0,
  dateJoined: null,
};
