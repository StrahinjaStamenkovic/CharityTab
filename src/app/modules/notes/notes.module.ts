import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note-list/note-list.component';
import { StoreModule } from '@ngrx/store';
import * as fromNote from './state/note.reducer';
import { EffectsModule } from '@ngrx/effects';
import { NoteEffects } from './state/note.effects';

@NgModule({
  declarations: [NoteComponent, NoteListComponent],
  imports: [CommonModule, FontAwesomeModule, FormsModule, StoreModule.forFeature(fromNote.notesFeatureKey, fromNote.reducer), EffectsModule.forFeature([NoteEffects])],
  exports: [NoteComponent, NoteListComponent],
})
export class NotesModule {}
