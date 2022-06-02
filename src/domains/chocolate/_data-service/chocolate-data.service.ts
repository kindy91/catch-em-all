import { Injectable } from '@angular/core';
import { map, Observable, of, pluck } from 'rxjs';
import { chocolateData } from 'src/assets/chocolate-data.mock';
import { map as _map } from 'lodash/fp';
import { Chocolate } from '../_entities/_models/chocolate.class';

@Injectable({
  providedIn: 'root'
})
export class ChocolateDataService {

  constructor() { }

  loadChocolates$(): Observable<Chocolate[]> {
    return of(chocolateData).pipe(
      pluck('data'),
      map(_map((chocolate) => new Chocolate(chocolate)))
    )
  }
}
