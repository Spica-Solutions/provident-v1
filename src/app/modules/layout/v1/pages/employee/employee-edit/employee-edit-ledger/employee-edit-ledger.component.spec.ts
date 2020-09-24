import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditLedgerComponent } from './employee-edit-ledger.component';

describe('EmployeeEditLedgerComponent', () => {
  let component: EmployeeEditLedgerComponent;
  let fixture: ComponentFixture<EmployeeEditLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEditLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
