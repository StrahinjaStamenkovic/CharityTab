import * as mongoose from 'mongoose';

export const CharitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  imagePath: { type: String, required: true },
  link: { type: String, required: true },
  totalHeartsDonated: { type: Number, required: true },
  totalMoneyRaised: { type: Number, required: true },
});

export interface Charity extends mongoose.Document {
  id: string;
  name: string;
  description: string;
  imagePath: string;
  link: string;
  totalHeartsDonated: number;
  totalMoneyRaised: number;
}
