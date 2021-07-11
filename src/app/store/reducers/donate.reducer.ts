import { createReducer, on } from '@ngrx/store';
import { donatingHeartsToCharity } from '../actions/donate.actions';

export const donateFeatureKey = 'donate';

export interface State {
  name: string;
  //id: number;
  amount: number;
}

export const initialState: State = {
  name: '',
  //id: NaN,
  amount: NaN,
};

export const reducer = createReducer(
  initialState,
  on(donatingHeartsToCharity, (state, action) => {
    return {
      ...state,
      name: action.data.name,
      //id: action.data.id,
      amount: action.data.amount,
    };
  })
);
