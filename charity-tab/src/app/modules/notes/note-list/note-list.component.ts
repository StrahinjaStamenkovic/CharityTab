import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {
  faCheckCircle,
  faPlusCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Note } from 'src/app/modules/notes/state/note.model';
import { AppState } from 'src/app/store';
import * as fromNotesSelector from 'src/app/modules/notes/state/notes.selectors';
import { selectUserId } from '../../auth/state/auth.selectors';
import { NoteService } from 'src/app/services/note.service';
import * as fromNotesActions from '../state/note.actions';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss'],
})
export class NoteListComponent implements OnInit {
  note$: Observable<Note[]> | null = null;

  faCirclePlus = faPlusCircle;
  faCircleCheck = faCheckCircle;
  faCircleX = faTimesCircle;

  controlVisibility: boolean = true;
  inputVisibility: boolean = false;

  userId!: string | null;

  constructor(
    private store: Store<AppState>,
    private notesService: NoteService
  ) {}

  ngOnInit(): void {
    this.store
      .pipe(select(selectUserId))
      .subscribe((userId) => (this.userId = userId));

    //Dispatch an action to load all notes for a given userId
    if (this.userId)
      this.store.dispatch(fromNotesActions.loadNotes({ userId: this.userId }));

    this.note$ = this.store.pipe(select(fromNotesSelector.selectAllNotes));
  }
  toggleForm() {
    this.controlVisibility = !this.controlVisibility;
    this.inputVisibility = !this.inputVisibility;
  }

  onSubmit(f: NgForm) {
    console.log(f.value.text);
    this.toggleForm();
    if (this.userId)
      this.store.dispatch(
        fromNotesActions.addNote({ text: f.value.text, userId: this.userId })
      );
  }
}
