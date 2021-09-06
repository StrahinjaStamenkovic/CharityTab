import * as mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const TodoSchema = new mongoose.Schema({
  task: { type: String, required: true },
  status: { type: Boolean, required: true },
  dateAdded: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

export interface Todo extends mongoose.Document {
  id: string;
  task: string;
  status: boolean;
  dateAdded: string;
  userId: string;
}
