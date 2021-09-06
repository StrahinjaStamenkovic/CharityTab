import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Charity } from './charity.model';

//Load Charities
export const loadCharities = createAction(
  '[Charity-List Component] Load All Charities'
);
export const loadCharitiesSuccess = createAction(
  '[Charity-List Effect] Load All Charities Success',
  props<{ charities: Charity[] }>()
);
export const loadCharitiesFailure = createAction(
  '[Charity-List Effect] Load All Charities Failure',
  props<{ error: any }>()
);

//
/*
export const addCharity = createAction(
  '[Charity/API] Add Charity',
  props<{ charity: Charity }>()
);

export const upsertCharity = createAction(
  '[Charity/API] Upsert Charity',
  props<{ charity: Charity }>()
);

export const addCharities = createAction(
  '[Charity/API] Add Charities',
  props<{ charities: Charity[] }>()
);

export const upsertCharities = createAction(
  '[Charity/API] Upsert Charities',
  props<{ charities: Charity[] }>()
);

export const updateCharity = createAction(
  '[Charity/API] Update Charity',
  props<{ charity: Update<Charity> }>()
);

export const updateCharities = createAction(
  '[Charity/API] Update Charities',
  props<{ charities: Update<Charity>[] }>()
);

export const deleteCharity = createAction(
  '[Charity/API] Delete Charity',
  props<{ id: string }>()
);

export const deleteCharities = createAction(
  '[Charity/API] Delete Charities',
  props<{ ids: string[] }>()
);

export const clearCharities = createAction('[Charity/API] Clear Charities');
*/
