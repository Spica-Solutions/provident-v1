import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditBeneficiariesComponent } from './member-edit-beneficiaries.component';

describe('MemberEditBeneficiariesComponent', () => {
  let component: MemberEditBeneficiariesComponent;
  let fixture: ComponentFixture<MemberEditBeneficiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEditBeneficiariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditBeneficiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
