import { createSelector } from '@ngrx/store';
import { selectAuthState } from '../../modules/auth/state/auth.selectors';
import * as fromAuth from '../../modules/auth/state/auth.reducer';

export interface AccountViewModel {
  username: string | null;
  name: string | null;
  lastName: string | null;
  dateJoined: string | null;
}

export const selectHeaderViewModel = createSelector(
  selectAuthState,
  (state: fromAuth.State): AccountViewModel => ({
    username: state.user.username,
    name: state.user.name,
    lastName: state.user.lastName,
    dateJoined: state.user.dateJoined,
  })
);
