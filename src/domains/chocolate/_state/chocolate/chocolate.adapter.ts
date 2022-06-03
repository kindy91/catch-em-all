import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Chocolate } from '../../_entities/_models/chocolate.model';

export const chocolateAdapter: EntityAdapter<Chocolate> =
  createEntityAdapter<Chocolate>({
    selectId: ({ id }: Chocolate) => id,
  });
