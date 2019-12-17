import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassbotComponent} from './classbot.component';

describe('ClassbotComponent', () => {
  let component: ClassbotComponent;
  let fixture: ComponentFixture<ClassbotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassbotComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
