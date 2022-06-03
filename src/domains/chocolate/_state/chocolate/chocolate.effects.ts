import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import {
  loadChocolates, loadChocolatesFail, loadChocolatesSuccess,
} from './chocolate.actions';
import { Action } from '@ngrx/store';
import { ChocolateDataService } from '../../_data-service/chocolate-data.service';
import { Chocolate } from '../../_entities/_models/chocolate.model';
import { enrichViewData } from '../chocolate-view/chocolate-view.actions';
import { map as _map } from 'lodash/fp';

@Injectable()
export class ChocolateEffects implements OnInitEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly dataService: ChocolateDataService
  ) {}

  loadChocolates$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadChocolates),
      switchMap(() =>
        this.dataService.loadChocolates$().pipe(
          map((chocolates) => loadChocolatesSuccess({ chocolates })),
          catchError((error) => of(loadChocolatesFail({ error })))
        )
      )
    )
  );

  ngrxOnInitEffects(): Action {
    return loadChocolates();
  }
}
