import { Action, createReducer, on } from '@ngrx/store';
import { ChocolateViewFeatureState } from './chocolate-view.entities';
import { chocolateViewAdapter,  } from './chocolate-view.adapter';
import { enrichViewData } from './chocolate-view.actions';

export const initialChocolateViewState: ChocolateViewFeatureState = {
  ...chocolateViewAdapter.getInitialState({}),
};

const reducer = createReducer(
  initialChocolateViewState,
  on(enrichViewData, (state, { viewData }) =>
    chocolateViewAdapter.addMany(viewData, state)
  )
);

// tslint:disable-next-line: typedef
export function chocolateViewReducer(
  state: ChocolateViewFeatureState | undefined,
  action: Action
) {
  return reducer(state, action);
}
