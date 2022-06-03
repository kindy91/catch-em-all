import { Component } from '@angular/core';
import { ChocolateAppService } from '../_app-service/chocolate-app.service';
import { get as _get } from 'lodash';

@Component({
  selector: 'app-chocolate-list',
  templateUrl: './chocolate-list.component.html',
})
export class ChocolateListComponent {
  _get = _get;
  displayedColumns: string[] = ['name', 'brand', 'currency', 'averagePrice', 'minimumPrice', 'cheapestShop', 'details'];

  constructor(readonly appService: ChocolateAppService) { }
}
