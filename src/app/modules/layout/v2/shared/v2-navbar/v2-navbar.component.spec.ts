import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { V2NavbarComponent } from './v2-navbar.component';

describe('V2NavbarComponent', () => {
  let component: V2NavbarComponent;
  let fixture: ComponentFixture<V2NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ V2NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(V2NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
