import { createAction, props } from '@ngrx/store';
import { Chocolate } from '../../_entities/_models/chocolate.model';
import { chocolateAction } from './chocolate.entities';

export const loadChocolates = createAction(chocolateAction.LoadChocolates);

export const loadChocolatesSuccess = createAction(
  chocolateAction.LoadChocolatesSuccess,
  props<{ chocolates: Chocolate[] }>()
);

export const loadChocolatesFail = createAction(
  chocolateAction.LoadChocolatesFail,
  props<{ error: string }>()
);
