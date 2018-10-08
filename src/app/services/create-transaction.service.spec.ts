import { TestBed } from '@angular/core/testing';

import { CreateTransactionService } from './create-transaction.service';

describe('CreateTransactionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreateTransactionService = TestBed.get(CreateTransactionService);
    expect(service).toBeTruthy();
  });
});
