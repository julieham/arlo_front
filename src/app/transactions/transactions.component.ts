import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction';
import { TransactionService } from '../transaction.service';


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
    if (transaction.category === 'Home') {
      return 'salmon';
    }
    if (transaction.category === 'Transports') {
      return 'orange';
    }
    if (transaction.category === 'Laundry') {
      return 'yellow';
    }
    if (transaction.category === 'Snacks') {
      return 'green';
    }
    if (transaction.category === 'Restaurants') {
      return 'duck';
    }
    if (transaction.category === 'Food') {
      return 'blue';
    }
    if (transaction.category === 'Sports') {
      return 'violet';
    }
    if (transaction.category === 'Fun') {
      return 'pink';
    }
    if (transaction.category === 'Bills') {
      return 'brown';
    }
    return 'b';
  }
}
