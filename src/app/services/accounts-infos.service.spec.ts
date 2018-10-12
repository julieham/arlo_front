import { TestBed } from '@angular/core/testing';

import { AccountsInfosService } from './accounts-infos.service';

describe('AccountsInfosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountsInfosService = TestBed.get(AccountsInfosService);
    expect(service).toBeTruthy();
  });
});
