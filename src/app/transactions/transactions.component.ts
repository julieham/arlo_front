import { Component, OnInit } from '@angular/core';
import {CategoryColors, Transaction} from '../types/transaction';
import { TransactionService } from '../services/transaction.service';
import {SetCategoryService} from '../services/set-category.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {


  transactions: Transaction[];
  selectedTransactions: Transaction[];

  constructor(private transactionService: TransactionService,
              private setCategoryService: SetCategoryService,
              private refreshService: RefreshTransactionsService) { }

  ngOnInit() {
    this.getTransactions();
    this.selectedTransactions = [];
    this.setCategoryService.unselect.subscribe(() => { this.selectedTransactions = []; });
    this.refreshService.refreshed.subscribe(() => {
      console.log('caca');
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
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }

  getCategoryStyleClass(transaction: Transaction): string {
    return CategoryColors.CATEGORIES_COLORS[transaction.category];
  }
}
