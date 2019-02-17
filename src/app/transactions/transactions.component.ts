import { Component, OnInit } from '@angular/core';
import {CategoryColors, Transaction} from '../types/transaction';
import { TransactionService } from '../services/transaction.service';
import {SetFieldsService} from '../services/set-fields.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';
import {CreateTransactionService} from '../services/create-transaction.service';
import {CycleService} from '../services/cycle.service';
import {RecurringTransactionService} from '../services/recurring-transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {


  transactions: Transaction[];
  selectedTransactions: Transaction[];
  cycle: string;


  constructor(private transactionService: TransactionService,
              private setFieldsService: SetFieldsService,
              private refreshService: RefreshTransactionsService,
              private createTransactionService: CreateTransactionService,
              private cycleService: CycleService,
              private recurringTransactionService: RecurringTransactionService) { }

  ngOnInit() {
    this.cycleService.currentCycle.subscribe(cycle => this.cycle = cycle);
    this.getTransactions();
    this.selectedTransactions = [];
    this.setFieldsService.unselect.subscribe(() => {
      this.selectedTransactions = [];
    });
    this.setFieldsService.listModified.subscribe(() => {
      this.selectedTransactions = [];
      this.getTransactions();
    });
    this.refreshService.refreshed.subscribe(() => {
      this.getTransactions();
    });
    this.createTransactionService.created.subscribe( () => {
      this.getTransactions();
    });
    this.cycleService.cycleChanged.subscribe( () => {
      this.getTransactions();
    });
    this.recurringTransactionService.created.subscribe(() => {
      this.getTransactions();
    });
  }

  onClick(transaction: Transaction): void {
    if (this.selectedTransactions.includes(transaction)) {
      this.selectedTransactions.splice(this.selectedTransactions.indexOf(transaction), 1);
    } else {
      this.selectedTransactions.push(transaction);
    }
  }

  private getTransactions(): void {
    this.transactionService.getTransactions(this.cycle).subscribe(transactions => this.transactions = transactions);
  }

  private getTransactionsWithCycle(cycle: string): void {
    this.cycle = cycle;
    this.getTransactions();
  }

  getCategoryStyleClass(transaction: Transaction): string {
    return CategoryColors.CATEGORIES_COLORS[transaction.category];
  }
}
