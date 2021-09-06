import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const NoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  dateAdded: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export interface Note extends mongoose.Document {
  id: string;
  text: string;
  dateAdded: string;
  userId: string;
}
