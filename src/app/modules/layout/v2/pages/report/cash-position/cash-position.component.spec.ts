import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPositionComponent } from './cash-position.component';

describe('CashPositionComponent', () => {
  let component: CashPositionComponent;
  let fixture: ComponentFixture<CashPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
