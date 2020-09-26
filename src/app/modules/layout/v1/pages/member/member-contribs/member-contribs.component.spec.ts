import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberContribsComponent } from './member-contribs.component';

describe('MemberContribsComponent', () => {
  let component: MemberContribsComponent;
  let fixture: ComponentFixture<MemberContribsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemberContribsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberContribsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
