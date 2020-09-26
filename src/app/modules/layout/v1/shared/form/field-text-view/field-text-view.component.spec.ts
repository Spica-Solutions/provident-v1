import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldTextViewComponent } from './field-text-view.component';

describe('FieldTextViewComponent', () => {
  let component: FieldTextViewComponent;
  let fixture: ComponentFixture<FieldTextViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldTextViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldTextViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
