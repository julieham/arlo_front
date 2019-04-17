import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CreateTransactionComponent} from '../create-transaction/create-transaction.component';
import {RecurringTransactionsComponent} from '../recurring-transactions/recurring-transactions.component';
import {CreateTransactionService} from '../services/create-transaction.service';


@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
})

export class CreatorComponent implements OnInit {

  recurring_transactions: string[];

  constructor(public dialog: MatDialog,
              private createTransactionService: CreateTransactionService) {
  }

  ngOnInit() {
    this.createTransactionService
      .getPossibleRecurringTransactions()
      .subscribe(transactions => this.recurring_transactions = transactions);
  }

  openAddManual(): void {
    this.dialog.open(CreateTransactionComponent, {
    });
  }

  openLaundry(): void {
    this.dialog.open(RecurringTransactionsComponent, {
      data: {recurring_transactions: this.recurring_transactions}
    });
  }

  createSingleRecurring(name: string) {
    this.createTransactionService.createSingleRecurringTransaction(name).subscribe();
  }


}
