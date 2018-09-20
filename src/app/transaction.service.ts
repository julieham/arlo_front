import { Injectable } from '@angular/core';
import { Transaction } from './transaction';
import { TRANSACTIONS } from './mock-transactions';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor() { }

  getTransactions(): Transaction[] {
    return TRANSACTIONS;
  }
}
