import { createFeatureSelector, createSelector } from '@ngrx/store';
import { chocolateFeatureKey, ChocolateFeatureState, } from './chocolate.entities';
import { chocolateAdapter } from './chocolate.adapter';
import { selectedChocolateIdSelector } from '../chocolate-interaction/chocolate-interaction.selectors';
import { get as _get } from 'lodash';

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

export const selectedChocolateSelector = createSelector(
  chocolatesEntitiesSelector,
  selectedChocolateIdSelector,
  (chocolateEntities, chocolateId) => _get(chocolateEntities, chocolateId)! 
);
