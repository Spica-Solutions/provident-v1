import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberEmpinfoEditComponent } from './member-empinfo-edit.component';

describe('MemberEmpinfoEditComponent', () => {
  let component: MemberEmpinfoEditComponent;
  let fixture: ComponentFixture<MemberEmpinfoEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberEmpinfoEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberEmpinfoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
