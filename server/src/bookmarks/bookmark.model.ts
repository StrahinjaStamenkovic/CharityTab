import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const BookmarkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  dateAdded: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export interface Bookmark extends mongoose.Document {
  id: string;
  name: string;
  link: string;
  dateAdded: string;
  userId: string;
}
