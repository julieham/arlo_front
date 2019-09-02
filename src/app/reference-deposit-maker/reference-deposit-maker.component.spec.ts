import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ReferenceDepositMakerComponent} from './reference-deposit-maker.component';

describe('ReferenceDepositMakerComponent', () => {
  let component: ReferenceDepositMakerComponent;
  let fixture: ComponentFixture<ReferenceDepositMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenceDepositMakerComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceDepositMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
