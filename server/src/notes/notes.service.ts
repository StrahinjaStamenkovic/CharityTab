import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Note } from './note.model';

@Injectable()
export class NotesService {
  constructor(@InjectModel('Note') private readonly noteModel: Model<Note>) {}

  async insertNote(text: string, dateAdded: string, userId: string) {
    const newNote = new this.noteModel({
      text,
      dateAdded,
      userId,
    });
    const result = await newNote.save();
    return { statusCode: 200, note: result };
  }

  async getNotes() {
    const notes = await this.noteModel.find().exec();
    return {
      statusCode: 200,
      notes: notes.map((note) => ({
        id: note.id,
        text: note.text,
        dateAdded: note.dateAdded,
        userId: note.userId,
      })),
    };
  }
  async getNotesForUser(userId: string) {
    const notes = await this.noteModel.find({ userId }).exec();
    return {
      statusCode: 200,
      notes: notes.map((note) => ({
        id: note.id,
        text: note.text,
        dateAdded: note.dateAdded,
        userId: note.userId,
      })),
    };
  }

  async getSingleNote(noteId: string) {
    const note = (await this.findNote(noteId)).note;
    return {
      statusCode: 200,
      note: {
        id: note.id,
        text: note.text,
        dateAdded: note.dateAdded,
        userId: note.userId,
      },
    };
  }

  async updateNote(
    noteId: string,
    text: string,
    dateAdded: string,
    userId: string,
  ) {
    const updatedNote = (await this.findNote(noteId)).note;

    if (text) {
      updatedNote.text = text;
    }
    if (dateAdded) {
      updatedNote.dateAdded = dateAdded;
    }
    if (userId) {
      updatedNote.userId = userId;
    }
    updatedNote.save();
  }

  async deleteNote(noteId: string) {
    const result = await this.noteModel.deleteOne({ _id: noteId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find note.');
    }
  }
  private async findNote(
    id: string,
  ): Promise<{ statusCode: number; note: Note }> {
    let note;
    try {
      note = await this.noteModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find note.');
    }
    if (!note) {
      throw new NotFoundException('Could not find note.');
    }
    return { statusCode: 200, note };
  }
}
