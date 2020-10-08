import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementActivitiesComponent } from './statement-activities.component';

describe('StatementActivitiesComponent', () => {
  let component: StatementActivitiesComponent;
  let fixture: ComponentFixture<StatementActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatementActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
