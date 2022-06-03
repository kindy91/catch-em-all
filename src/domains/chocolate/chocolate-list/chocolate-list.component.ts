import { Component } from '@angular/core';
import { ChocolateAppService } from '../_app-service/chocolate-app.service';
import { get as _get } from 'lodash/fp';
import { Dictionary } from '@ngrx/entity';
import { ChocolateViewData } from '../_entities/_interfaces/chocolate-view-data.interface';

@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
  styleUrls: ['./chocolate-list.component.scss']
})
export class ChocolateListComponent {
  displayedColumns: string[] = ['name', 'brand', 'currency', 'averagePrice', 'minimumPrice', 'cheapestShop', 'details'];

  constructor(readonly appService: ChocolateAppService) { }

  getViewDataProperty(id: number, viewDataEntities: Dictionary<ChocolateViewData>, property: keyof ChocolateViewData) {
    return viewDataEntities[id]![property]
  }
}
