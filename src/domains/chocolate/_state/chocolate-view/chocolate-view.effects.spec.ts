import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { loadChocolatesSuccess } from '../chocolate/chocolate.actions';
import { enrichViewData } from './chocolate-view.actions';
import { ChocolateViewEffects } from './chocolate-view.effects';

describe('ChocolateViewEffects', () => {
  let effects: ChocolateViewEffects;
  let actions: Observable<any>;


  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChocolateViewEffects,
        provideMockActions(() => actions),
      ],
    });

    effects = TestBed.get(ChocolateViewEffects);
  });

  describe('enrichViewData$', () => {
    it('should enrich view data', () => {
      const action = loadChocolatesSuccess({chocolates: []});
      const completion = enrichViewData({viewData: []});
      
      actions = hot('a', { a: action });
      const expected = cold('b', { b: completion });
  
      expect(effects.enrichViewData$).toBeObservable(expected);
    });
  })
});