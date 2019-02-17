import { Component, OnInit } from '@angular/core';
import {RecurringTransactionService} from '../services/recurring-transaction.service';

@Component({
  selector: 'app-recurring-transactions',
  templateUrl: './recurring-transactions.component.html',
  styleUrls: ['./recurring-transactions.component.css']
})
export class RecurringTransactionsComponent implements OnInit {

  recurring_transactions: string[];

  constructor(private recurringTransactionService: RecurringTransactionService) { }

  ngOnInit() {
    this.recurringTransactionService
      .getPossibleRecurringTransactions()
      .subscribe(transactions => this.recurring_transactions = transactions);
  }

  onRecurringTransactions(name: string) {
    this.recurringTransactionService.createTransaction(name).subscribe();
  }

}
