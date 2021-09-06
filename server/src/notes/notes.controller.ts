import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';

import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post()
  async addNote(
    @Body('text') noteText: string,
    @Body('dateAdded') noteDateAdded: string,
    @Body('userId') noteUserId: string,
  ) {
    const response = await this.notesService.insertNote(
      noteText,
      noteDateAdded,
      noteUserId,
    );
    return response;
  }

  @Get()
  async getAllNotes() {
    const response = await this.notesService.getNotes();
    return response;
  }
  @Get('/userId=:userId')
  async getAllNotesForUser(@Param('userId') userId: string) {
    const response = await this.notesService.getNotesForUser(userId);
    return response;
  }

  @Get(':id')
  getNote(@Param('id') noteId: string) {
    return this.notesService.getSingleNote(noteId);
  }

  @Patch(':id')
  async updateNote(
    @Param('id') noteId: string,
    @Body('text') noteText: string,
    @Body('dateAdded') noteDateAdded: string,
    @Body('userId') noteUserId: string,
  ) {
    await this.notesService.updateNote(
      noteId,
      noteText,
      noteDateAdded,
      noteUserId,
    );
    return null;
  }

  @Delete(':id')
  async removeNote(@Param('id') noteId: string) {
    await this.notesService.deleteNote(noteId);
    return null;
  }
}
