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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.note$ = this.store.pipe(
      select(fromNotesSelector.selectNotes)
      // tap((bookmarks) => console.log(bookmarks))
    );
  }
  toggleForm() {
    this.controlVisibility = !this.controlVisibility;
    this.inputVisibility = !this.inputVisibility;
  }

  onSubmit(f: NgForm) {
    console.log(f.value.name, f.value.url);
  }
}
