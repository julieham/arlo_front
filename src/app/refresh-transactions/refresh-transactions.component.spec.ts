import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefreshTransactionsComponent } from './refresh-transactions.component';

describe('RefreshTransactionsComponent', () => {
  let component: RefreshTransactionsComponent;
  let fixture: ComponentFixture<RefreshTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefreshTransactionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefreshTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
