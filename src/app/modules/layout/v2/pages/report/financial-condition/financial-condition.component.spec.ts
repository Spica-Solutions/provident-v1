import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialConditionComponent } from './financial-condition.component';

describe('FinancialConditionComponent', () => {
  let component: FinancialConditionComponent;
  let fixture: ComponentFixture<FinancialConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
