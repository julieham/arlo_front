import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DepositOverviewComponent} from './deposit-overview.component';

describe('DepositOverviewComponent', () => {
  let component: DepositOverviewComponent;
  let fixture: ComponentFixture<DepositOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepositOverviewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
