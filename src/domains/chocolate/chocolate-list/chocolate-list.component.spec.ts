import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChocolateAppService } from '../_app-service/chocolate-app.service';
import { MatIconModule } from '@angular/material/icon';
import { ChocolateListComponent } from './chocolate-list.component';

describe('ChocolateListComponent', () => {
  let testUnit: ChocolateListComponent;
  let fixture: ComponentFixture<ChocolateListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule],
      declarations: [ ChocolateListComponent ],
      providers: [{provide: ChocolateAppService, useValue: {}}]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChocolateListComponent);
    testUnit = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(testUnit).toBeTruthy();
  });
});
