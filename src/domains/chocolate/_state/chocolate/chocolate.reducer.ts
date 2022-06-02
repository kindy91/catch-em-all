import { Action, createReducer, on } from '@ngrx/store';
import { ChocolateFeatureState } from './chocolate.entities';
import { chocolateAdapter,  } from './chocolate.adapter';
import { loadChocolatesSuccess } from './chocolate.actions';

export const initialChocolateState: ChocolateFeatureState = {
  ...chocolateAdapter.getInitialState({}),
};

const reducer = createReducer(
  initialChocolateState,
  on(loadChocolatesSuccess, (state, { chocolates }) =>
    chocolateAdapter.addMany(chocolates, state)
  )
);

// tslint:disable-next-line: typedef
export function chocolateReducer(
  state: ChocolateFeatureState | undefined,
  action: Action
) {
  return reducer(state, action);
}
