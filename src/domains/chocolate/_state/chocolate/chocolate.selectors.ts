import { createFeatureSelector, createSelector } from '@ngrx/store';
import { chocolateFeatureKey, ChocolateFeatureState, } from './chocolate.entities';
import { chocolateAdapter } from './chocolate.adapter';

const { selectAll, selectEntities } = chocolateAdapter.getSelectors();

const chocolateFeatureState =
  createFeatureSelector<ChocolateFeatureState>(chocolateFeatureKey);

export const chocolatesSelector = createSelector(
  chocolateFeatureState,
  selectAll
);

export const chocolatesEntitiesSelector = createSelector(
  chocolateFeatureState,
  selectEntities
);
