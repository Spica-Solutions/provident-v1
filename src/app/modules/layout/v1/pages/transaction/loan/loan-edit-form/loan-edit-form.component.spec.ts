import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanEditFormComponent } from './loan-edit-form.component';

describe('LoanEditFormComponent', () => {
  let component: LoanEditFormComponent;
  let fixture: ComponentFixture<LoanEditFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanEditFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
