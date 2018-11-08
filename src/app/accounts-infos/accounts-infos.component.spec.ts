import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsInfosComponent } from './accounts-infos.component';

describe('AccountsInfosComponent', () => {
  let component: AccountsInfosComponent;
  let fixture: ComponentFixture<AccountsInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
