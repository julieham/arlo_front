import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ClassbotSingleClassComponent} from './classbot-single-class.component';

describe('ClassbotSingleClassComponent', () => {
  let component: ClassbotSingleClassComponent;
  let fixture: ComponentFixture<ClassbotSingleClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClassbotSingleClassComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassbotSingleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
