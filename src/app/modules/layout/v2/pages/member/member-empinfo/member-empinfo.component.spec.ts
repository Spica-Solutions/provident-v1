import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEmpinfoComponent } from './member-empinfo.component';

describe('MemberEmpinfoComponent', () => {
  let component: MemberEmpinfoComponent;
  let fixture: ComponentFixture<MemberEmpinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEmpinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEmpinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
