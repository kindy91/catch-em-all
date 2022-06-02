import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Chocolate } from '../../_entities/_models/chocolate.class';

export const chocolateAdapter: EntityAdapter<Chocolate> =
  createEntityAdapter<Chocolate>({
    selectId: ({ id }: Chocolate) => id,
  });
