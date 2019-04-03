import {Component, OnInit} from '@angular/core';
import {CreateTransactionService} from '../services/create-transaction.service';

@Component({
  selector: 'app-recurring-transactions',
  templateUrl: './recurring-transactions.component.html',
  styleUrls: ['./recurring-transactions.component.css']
})
export class RecurringTransactionsComponent implements OnInit {

  recurring_transactions: string[];

  constructor(private createTransactionService: CreateTransactionService) {
  }

  ngOnInit() {
    this.createTransactionService
      .getPossibleRecurringTransactions()
      .subscribe(transactions => this.recurring_transactions = transactions);
  }

  onRecurringTransaction(name: string) {
    this.createTransactionService.createRecurringTransaction(name).subscribe();
  }
}
