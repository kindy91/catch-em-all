import { EntityState } from '@ngrx/entity';
import { Chocolate } from '../../_entities/_models/chocolate.class';

export interface ChocolateFeatureState extends EntityState<Chocolate> {}

export const chocolateFeatureKey = 'chocolateFeature';

export enum chocolateAction {
  LoadChocolates = '[ChocolateFeature] load chocolate',
  LoadChocolatesSuccess = '[ChocolateFeature] load chocolate success',
  LoadChocolatesFail = '[ChocolateFeature] load chocolate success fail',
}
