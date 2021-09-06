import { User } from '../../auth/resources/auth';
import { Charity } from './charity.model';

export interface CharityDonation {
  charity: Charity;
  amount: number;
  user: User;
}
