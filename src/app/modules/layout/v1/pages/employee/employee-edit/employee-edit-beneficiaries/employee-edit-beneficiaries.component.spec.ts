import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEditBeneficiariesComponent } from './employee-edit-beneficiaries.component';

describe('EmployeeEditBeneficiariesComponent', () => {
  let component: EmployeeEditBeneficiariesComponent;
  let fixture: ComponentFixture<EmployeeEditBeneficiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeEditBeneficiariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditBeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
