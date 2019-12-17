import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassbotBookingConfirmComponent} from './classbot-booking-confirm.component';

describe('ClassbotBookingConfirmComponent', () => {
  let component: ClassbotBookingConfirmComponent;
  let fixture: ComponentFixture<ClassbotBookingConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassbotBookingConfirmComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassbotBookingConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
