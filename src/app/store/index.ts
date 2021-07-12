import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromDonate from './reducers/donate.reducer';
import * as fromAuth from './reducers/auth.reducer';


export interface AppState {

  [fromDonate.donateFeatureKey]: fromDonate.State;
  [fromAuth.authFeatureKey]: fromAuth.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromDonate.donateFeatureKey]: fromDonate.reducer,
  [fromAuth.authFeatureKey]: fromAuth.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
