import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Charity } from './charity.model';
import * as CharityActions from './charity.actions';

export const charitiesFeatureKey = 'charities';

export interface State extends EntityState<Charity> {
  // additional entities state properties
  error: any;
}

export const adapter: EntityAdapter<Charity> = createEntityAdapter<Charity>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
  error: null,
});

export const reducer = createReducer(
  initialState,
  on(CharityActions.loadCharitiesSuccess, (state, action) =>
    adapter.setAll(action.charities, state)
  ),
  on(CharityActions.loadCharitiesFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
  /*
  on(CharityActions.upsertCharity, (state, action) =>
    adapter.upsertOne(action.charity, state)
  ),
  on(CharityActions.addCharities, (state, action) =>
    adapter.addMany(action.charities, state)
  ),
  on(CharityActions.upsertCharities, (state, action) =>
    adapter.upsertMany(action.charities, state)
  ),
  on(CharityActions.updateCharity, (state, action) =>
    adapter.updateOne(action.charity, state)
  ),
  on(CharityActions.updateCharities, (state, action) =>
    adapter.updateMany(action.charities, state)
  ),
  on(CharityActions.deleteCharity, (state, action) =>
    adapter.removeOne(action.id, state)
  ),
  on(CharityActions.deleteCharities, (state, action) =>
    adapter.removeMany(action.ids, state)
  ),

  on(CharityActions.clearCharities, (state) => adapter.removeAll(state))*/
);

export const { selectIds, selectEntities, selectAll, selectTotal } =
  adapter.getSelectors();
