import { TestBed } from '@angular/core/testing';

import { ChocolateAppService } from './chocolate-app.service';

describe('ChocolateAppService', () => {
  let service: ChocolateAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChocolateAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
