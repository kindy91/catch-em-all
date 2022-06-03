import { Action, createReducer, on } from '@ngrx/store';
import { setSelectedChocolateId } from './chocolate-interaction.actions';
import { ChocolateInteractionFeatureState } from './chocolate-interaction.entities';

export const initialChocolateInteractionState: ChocolateInteractionFeatureState = {
  selectedChocolateId: undefined!
};

const reducer = createReducer(
  initialChocolateInteractionState,
    on(setSelectedChocolateId, (state, { selectedChocolateId }) =>
    ({...state, selectedChocolateId})
  )
);

// tslint:disable-next-line: typedef
export function chocolateInteractionReducer(
  state: ChocolateInteractionFeatureState | undefined,
  action: Action
) {
  return reducer(state, action);
}
