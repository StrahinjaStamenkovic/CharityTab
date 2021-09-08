import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { NoteService } from 'src/app/services/note.service';
import * as NoteActions from './note.actions';

@Injectable()
export class NoteEffects {
  //Load Notes API Effect
  loadNotes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NoteActions.loadNotes),
      mergeMap((action) =>
        this.noteService.getAllForUser(action.userId).pipe(
          map((data) => NoteActions.loadNotesSuccess({ notes: data })),
          catchError((error) => of(NoteActions.loadNotesFailure({ error })))
        )
      )
    );
  });

  //Add Notes API Effect
  addNotes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NoteActions.addNote),
      mergeMap((action) =>
        this.noteService.createNote(action.text, action.userId).pipe(
          map((data) => NoteActions.addNoteSuccess({ note: data.note })),
          catchError((error) => of(NoteActions.addNoteFailure({ error })))
        )
      )
    );
  });

  //Delete Notes API Effect
  deleteNotes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(NoteActions.deleteNote),
      mergeMap((action) =>
        this.noteService.deleteNote(action.id).pipe(
          map(() => NoteActions.deleteNoteSuccess()),
          catchError((error) => of(NoteActions.deleteNoteFailure({ error })))
        )
      )
    );
  });

  constructor(private actions$: Actions, private noteService: NoteService) {}
}
