import { Bookmark } from './bookmark';
import { Note } from './note';
import { ToDo } from './toDo';

export interface User {
  //id: number;
  name: string;
  lastName: string;
  username: string;
  password: string;
  isAdming: boolean;
  bookmarks: Array<Bookmark>;
  notes: Array<Note>;
  toDo: Array<ToDo>;
  totalCollectedHearts: number;
  currentAmountOfHearts: number;
  totalMoneyDonated: number;
  totalTabsOpened: number;
  dateJoined: Date;
  //prefered search engine
}
