import { TestBed } from '@angular/core/testing';

import { RefreshTransactionsService } from './refresh-transactions.service';

describe('RefreshTransactionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RefreshTransactionsService = TestBed.get(RefreshTransactionsService);
    expect(service).toBeTruthy();
  });
});
