import { createAction, props } from '@ngrx/store';
import { ChocolateViewData } from '../../_entities/_interfaces/chocolate-view-data.interface';
import { chocolateViewAction } from './chocolate-view.entities';

export const enrichViewData = createAction(
  chocolateViewAction.EnrichViewData,
  props<{viewData: ChocolateViewData[]}>()
);
