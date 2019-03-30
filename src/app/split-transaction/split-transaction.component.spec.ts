import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SplitTransactionComponent} from './split-transaction.component';

describe('SplitTransactionComponent', () => {
  let component: SplitTransactionComponent;
  let fixture: ComponentFixture<SplitTransactionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SplitTransactionComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
