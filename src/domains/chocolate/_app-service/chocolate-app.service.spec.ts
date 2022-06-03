import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { setSelectedChocolateId } from '../_state/chocolate-interaction/chocolate-interaction.actions';

import { ChocolateAppService } from './chocolate-app.service';

describe('ChocolateAppService', () => {
  let testUnit: ChocolateAppService;
  const storeMock = {select: () => of(undefined), dispatch: jasmine.createSpy()};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: Store, useValue: storeMock}]
    });
    testUnit = TestBed.inject(ChocolateAppService);
  });

  it('should be created', () => {
    expect(testUnit).toBeTruthy();
  });

  describe('setSelectedRepositoryId()', () => {
    it('it should dispatch action', () => {
      const selectedChocolateId = '1234';
      testUnit.setSelectedId(selectedChocolateId)
      expect(storeMock.dispatch).toHaveBeenCalledWith(setSelectedChocolateId({selectedChocolateId}))
    })
  })
});
