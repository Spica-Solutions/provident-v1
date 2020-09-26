import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEditLedgerComponent } from './member-edit-ledger.component';

describe('MemberEditLedgerComponent', () => {
  let component: MemberEditLedgerComponent;
  let fixture: ComponentFixture<MemberEditLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEditLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEditLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
