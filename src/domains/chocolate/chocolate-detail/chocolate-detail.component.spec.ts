import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChocolateAppService } from '../_app-service/chocolate-app.service';
import { MatIconModule } from '@angular/material/icon';

import { ChocolateDetailComponent } from './chocolate-detail.component';

describe('ChocolateDetailComponent', () => {
  let testUnit: ChocolateDetailComponent;
  let fixture: ComponentFixture<ChocolateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [ ChocolateDetailComponent ],
      providers: [{provide: ChocolateAppService, useValue: {}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateDetailComponent);
    testUnit = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testUnit).toBeTruthy();
  });
});
