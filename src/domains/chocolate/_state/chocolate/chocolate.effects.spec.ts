import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';
import { ChocolateDataService } from '../../_data-service/chocolate-data.service';
import { loadChocolates, loadChocolatesFail, loadChocolatesSuccess } from './chocolate.actions';
import { ChocolateEffects } from './chocolate.effects';

describe('ChocolateEffects', () => {
  let effects: ChocolateEffects;
  let actions: Observable<any>;

  const dataServiceMock = {
    loadChocolates$: jasmine.createSpy() 
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ChocolateEffects,
        provideMockActions(() => actions),
        {
          provide: ChocolateDataService, useValue: dataServiceMock
        }
      ],
    });

    effects = TestBed.get(ChocolateEffects);
  });

  describe('loadChocolates$', () => {
    it('should work', () => {
      const action = loadChocolates();
      const completion = loadChocolatesSuccess({chocolates: []});
      
      dataServiceMock.loadChocolates$.and.returnValue(cold('b', { b: [] }));

      actions = hot('a', { a: action });
      const expected = cold('b', { b: completion });
  
      expect(effects.loadChocolates$).toBeObservable(expected);
    });

    it('should fail', () => {
      const action = loadChocolates();
      const completion = loadChocolatesFail({error: 'error'});
  
      dataServiceMock.loadChocolates$.and.returnValue(cold('#'));

      actions = hot('a', { a: action });
      const expected = cold('b', { b: completion });
  
      expect(effects.loadChocolates$).toBeObservable(expected);
    });
  })

  describe('ngrxOnInitEffects()', () => {
    it('should initially loadChocolates', () => {
      expect(effects.ngrxOnInitEffects()).toEqual(loadChocolates())
    })
  })
});