import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {N26AuthenticateConfirmComponent} from './n26-authenticate-confirm.component';

describe('N26AuthenticateConfirmComponent', () => {
  let component: N26AuthenticateConfirmComponent;
  let fixture: ComponentFixture<N26AuthenticateConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [N26AuthenticateConfirmComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(N26AuthenticateConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
