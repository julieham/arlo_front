import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CycleSelectComponent } from './cycle-select.component';

describe('CycleSelectComponent', () => {
  let component: CycleSelectComponent;
  let fixture: ComponentFixture<CycleSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CycleSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CycleSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
