import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true },
  totalCollectedHearts: { type: Number, required: true },
  currentAmountOfHearts: { type: Number, required: true },
  totalMoneyDonated: { type: Number, required: true },
  totalHeartsDonated: { type: Number, required: true },
  totalTabsOpened: { type: Number, required: true },
  dateJoined: { type: String, required: true },
});

export interface User extends mongoose.Document {
  id: string;
  name: string;
  lastName: string;
  username: string;
  password: string;
  isAdmin: number;
  totalCollectedHearts: number;
  currentAmountOfHearts: number;
  totalMoneyDonated: number;
  totalHeartsDonated: number;
  totalTabsOpened: number;
  dateJoined: string;
}
