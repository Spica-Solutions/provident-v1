import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementEquityComponent } from './statement-equity.component';

describe('StatementEquityComponent', () => {
  let component: StatementEquityComponent;
  let fixture: ComponentFixture<StatementEquityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementEquityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
