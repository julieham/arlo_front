import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {


  transactions: Transaction[];
  selectedTransaction: Transaction;

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.getTransactions();
  }

  onSelect(transaction: Transaction): void {
    this.selectedTransaction = transaction;
  }

  private getTransactions(): void {
    this.transactionService.getTransactions().subscribe(transactions => this.transactions = transactions);
  }

}
