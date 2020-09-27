import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportRemittanceComponent } from './import-remittance.component';

describe('ImportRemittanceComponent', () => {
  let component: ImportRemittanceComponent;
  let fixture: ComponentFixture<ImportRemittanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportRemittanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportRemittanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
