import { EntityState } from '@ngrx/entity';
import { Chocolate } from '../../_entities/_models/chocolate.model';

export interface ChocolateInteractionFeatureState {
  selectedChocolateId: string;
}

export const chocolateInteractionFeatureKey = 'chocolateInteractionFeature';

export enum chocolateInteractionAction {
  SetSelectedChocolateId = '[ChocolateInteractionFeature] set selected chocolate id',
}
