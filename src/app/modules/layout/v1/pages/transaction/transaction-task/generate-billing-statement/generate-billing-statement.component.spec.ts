import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBillingStatementComponent } from './generate-billing-statement.component';

describe('GenerateBillingStatementComponent', () => {
  let component: GenerateBillingStatementComponent;
  let fixture: ComponentFixture<GenerateBillingStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBillingStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBillingStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
