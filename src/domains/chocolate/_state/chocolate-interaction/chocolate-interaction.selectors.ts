import { createFeatureSelector, createSelector } from '@ngrx/store';
import { chocolateInteractionFeatureKey, ChocolateInteractionFeatureState } from './chocolate-interaction.entities';

const chocolateInteractionFeatureState =
  createFeatureSelector<ChocolateInteractionFeatureState>(chocolateInteractionFeatureKey);

export const selectedChocolateIdSelector = createSelector(
  chocolateInteractionFeatureState,
  ({selectedChocolateId}) => selectedChocolateId
);
