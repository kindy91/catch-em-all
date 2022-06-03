import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { ChocolateViewData } from '../../_entities/_interfaces/chocolate-view-data.interface';

export const chocolateViewAdapter: EntityAdapter<ChocolateViewData> =
  createEntityAdapter<ChocolateViewData>({
    selectId: ({ id }: ChocolateViewData) => id,
  });
