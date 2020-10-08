import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementCashflowsComponent } from './statement-cashflows.component';

describe('StatementCashflowsComponent', () => {
  let component: StatementCashflowsComponent;
  let fixture: ComponentFixture<StatementCashflowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementCashflowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementCashflowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
