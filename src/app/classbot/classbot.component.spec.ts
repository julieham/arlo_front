import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassbotDashboardComponent} from './classbot.component';

describe('ClassbotComponent', () => {
  let component: ClassbotDashboardComponent;
  let fixture: ComponentFixture<ClassbotDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassbotDashboardComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassbotDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
