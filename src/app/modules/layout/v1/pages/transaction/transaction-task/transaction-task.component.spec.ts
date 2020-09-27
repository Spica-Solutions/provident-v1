import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTaskComponent } from './transaction-task.component';

describe('TransactionTaskComponent', () => {
  let component: TransactionTaskComponent;
  let fixture: ComponentFixture<TransactionTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
