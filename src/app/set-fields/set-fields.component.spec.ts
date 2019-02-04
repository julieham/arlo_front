import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetFieldsComponent } from './set-fields.component';

describe('SetFieldsComponent', () => {
  let component: SetFieldsComponent;
  let fixture: ComponentFixture<SetFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
