import { createAction, props } from '@ngrx/store';
import { chocolateInteractionAction } from './chocolate-interaction.entities';

export const setSelectedChocolateId = createAction(
  chocolateInteractionAction.SetSelectedChocolateId,
  props<{ selectedChocolateId: string }>()
);
