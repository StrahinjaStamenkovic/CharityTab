import { Component, Input, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Note } from 'src/app/modules/notes/state/note.model';
import { AppState } from 'src/app/store';
import { deleteNote } from '../../notes/state/note.actions';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() note: Note | null = null;
  faDeleteIcon = faTimesCircle;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  delete() {
    if (this.note) this.store.dispatch(deleteNote({ id: this.note.id }));
  }
}
