import { EntityState } from '@ngrx/entity';
import { ChocolateViewData } from '../../_entities/_interfaces/chocolate-view-data.interface';

export interface ChocolateViewFeatureState extends EntityState<ChocolateViewData> {}

export const chocolateViewFeatureKey = 'chocolateViewFeature';

export enum chocolateViewAction {
  EnrichViewData = '[ChocolateViewFeature] enrich view data',
}
