import { createFeatureSelector, createSelector } from '@ngrx/store';
import { chocolateViewAdapter } from './chocolate-view.adapter';
import { chocolateViewFeatureKey, ChocolateViewFeatureState } from './chocolate-view.entities';

const { selectAll, selectEntities } = chocolateViewAdapter.getSelectors();

const chocolateViewFeatureState =
  createFeatureSelector<ChocolateViewFeatureState>(chocolateViewFeatureKey);

export const chocolatesViewDataSelector = createSelector(
  chocolateViewFeatureState,
  selectAll
);

export const chocolatesViewDataEntitiesSelector = createSelector(
  chocolateViewFeatureState,
  selectEntities
);
