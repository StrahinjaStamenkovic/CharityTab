import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/auth/resources/auth';

//Login Actions
export const loginPage = createAction(
  '[Login Component] Login User',
  props<{ username: string; password: string }>()
);

export const loginSuccess = createAction(
  '[Auth Effect] Login User Success',
  props<{ user: User }>()
);

export const loginFailure = createAction(
  '[Auth Effect] Login User Failure',
  props<{ error: any }>()
);

//Register Actions
export const registerPage = createAction(
  '[Register Component] Register User',
  props<{
    name: string;
    lastName: string;
    username: string;
    password: string;
  }>()
);

export const registerSuccess = createAction(
  '[Auth Effect] Register User Success',
  props<{ user: User }>()
);

export const registerFailure = createAction(
  '[Auth Effect] Register User Failure',
  props<{ error: any }>()
);

//Logout Actions
export const logout = createAction(
  '[Header Component] Logout User',
  props<{ user: User }>()
);

export const logoutSuccess = createAction(
  '[App Effect] Logout User Successful',
  props<{ result: boolean }>()
);
export const logoutFailure = createAction(
  '[App Effect] Logout User Failed',
  props<{ error: any }>()
);

//Reload Action
export const browserReload = createAction(
  '[App Component] Browser Reload',
  props<{ user: User }>()
);
