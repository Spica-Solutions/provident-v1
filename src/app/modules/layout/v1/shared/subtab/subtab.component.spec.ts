import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtabComponent } from './subtab.component';

describe('SubtabComponent', () => {
  let component: SubtabComponent;
  let fixture: ComponentFixture<SubtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
