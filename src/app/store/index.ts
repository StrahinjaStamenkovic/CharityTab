import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromDonate from './reducers/donate.reducer';


export interface AppState {

  [fromDonate.donateFeatureKey]: fromDonate.State;
}

export const reducers: ActionReducerMap<AppState> = {

  [fromDonate.donateFeatureKey]: fromDonate.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
