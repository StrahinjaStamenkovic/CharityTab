import { User } from '../modules/resources/auth';
import { Charity } from './charity';

export interface CharityDonation {
  charity: Charity;
  amount: number;
  user: User;
}
