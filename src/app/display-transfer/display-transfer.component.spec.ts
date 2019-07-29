import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DisplayTransferComponent} from './display-transfer.component';

describe('DisplayTransferComponent', () => {
  let component: DisplayTransferComponent;
  let fixture: ComponentFixture<DisplayTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayTransferComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
