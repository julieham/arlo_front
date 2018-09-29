import { Component, OnInit } from '@angular/core';
import {CategoryColors, Transaction} from '../types/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {


  transactions: Transaction[];
  selectedTransactions: Transaction[];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getTransactions();
    this.selectedTransactions = [];
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
