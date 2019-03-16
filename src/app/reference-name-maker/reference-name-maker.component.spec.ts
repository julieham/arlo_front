import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferenceNameMakerComponent } from './reference-name-maker.component';

describe('ReferenceNameMakerComponent', () => {
  let component: ReferenceNameMakerComponent;
  let fixture: ComponentFixture<ReferenceNameMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferenceNameMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenceNameMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
