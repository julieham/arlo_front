import {Component, Input, OnInit} from '@angular/core';
import {CategoryColors, Transaction} from '../types/transaction';
import { TransactionService } from '../services/transaction.service';
import {SetCategoryService} from '../services/set-category.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';
import {CreateTransactionService} from '../services/create-transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {


  transactions: Transaction[];
  selectedTransactions: Transaction[];

  @Input() cycle: string;

  constructor(private transactionService: TransactionService,
              private setCategoryService: SetCategoryService,
              private refreshService: RefreshTransactionsService,
              private createTransactionService: CreateTransactionService) { }

  ngOnInit() {
    this.getTransactions();
    this.selectedTransactions = [];
    this.setCategoryService.unselect.subscribe(() => { this.selectedTransactions = []; });
    this.refreshService.refreshed.subscribe(() => {
      this.getTransactions();
    });
    this.createTransactionService.created.subscribe( () => {
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

  getCategoryStyleClass(transaction: Transaction): string {
    return CategoryColors.CATEGORIES_COLORS[transaction.category];
  }
}
