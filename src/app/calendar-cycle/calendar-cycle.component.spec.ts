import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CalendarCycleComponent} from './calendar-cycle.component';

describe('CalendarCycleComponent', () => {
  let component: CalendarCycleComponent;
  let fixture: ComponentFixture<CalendarCycleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalendarCycleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
