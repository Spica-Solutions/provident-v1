import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V2TopbarComponent } from './v2-topbar.component';

describe('V2TopbarComponent', () => {
  let component: V2TopbarComponent;
  let fixture: ComponentFixture<V2TopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V2TopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V2TopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
