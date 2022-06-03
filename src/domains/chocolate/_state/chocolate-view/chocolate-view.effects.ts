import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, pluck } from 'rxjs/operators';
import { loadChocolatesSuccess } from '../chocolate/chocolate.actions';
import { map as _map } from 'lodash/fp'
import { enrichViewData } from './chocolate-view.actions';
import { toChocolateViewData } from './chocolate-view.mapper';
@Injectable()
export class ChocolateViewEffects {
  constructor(
    private readonly actions$: Actions,
  ) {}

  enrichViewData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChocolatesSuccess),
      pluck('chocolates'),
      map(_map(toChocolateViewData)),
      map((viewData) => enrichViewData({viewData}))
    )
  );
}
