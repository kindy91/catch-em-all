import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Chocolate } from '../_entities/_models/chocolate.model';
import { chocolatesSelector, selectedChocolateSelector } from '../_state/chocolate/chocolate.selectors';
import { map as _map } from 'lodash/fp';
import { Dictionary } from '@ngrx/entity';
import { ChocolateViewData } from '../_entities/_interfaces/chocolate-view-data.interface';
import { chocolatesViewDataEntitiesSelector } from '../_state/chocolate-view/chocolate-view.selectors';
import { setSelectedChocolateId } from '../_state/chocolate-interaction/chocolate-interaction.actions';

@Injectable({
  providedIn: 'root'
})
export class ChocolateAppService {
  chocolates$: Observable<Chocolate[]> = this.store.select(chocolatesSelector);
  viewDataEntities$: Observable<Dictionary<ChocolateViewData>> = this.store.select(chocolatesViewDataEntitiesSelector)
  selectedChocolate$: Observable<Chocolate> = this.store.select(selectedChocolateSelector);

  constructor(private readonly store: Store) { }

  setSelectedId(selectedChocolateId: string): void {
    this.store.dispatch(setSelectedChocolateId({selectedChocolateId}))
  }
}
