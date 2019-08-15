import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../services/transaction.service';
import {Transaction} from '../types/transaction';
import {CategoryService} from '../services/category.service';
import {DepositService} from '../services/deposit.service';

@Component({
  selector: 'app-filter-transactions',
  templateUrl: './filter-transactions.component.html',
  styleUrls: ['./filter-transactions.component.css']
})
export class FilterTransactionsComponent implements OnInit {

  private transactions: Transaction[];
  private myTransactions: Transaction[];
  private selectedTransactions: Transaction[] = [];

  private accounts: string[] = [];
  private categories: string[] = [];
  private deposit_names: string[] = [];
  private local_cycles = ['Aug19', 'Sep19', 'Cali19'];

  constructor(private transactionService: TransactionService,
              private categoryService: CategoryService,
              private depositService: DepositService) {
  }

  ngOnInit() {
    this.getCurrentTransactions();
    this.categoryService.getAllAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
    this.depositService.getDepositNames().subscribe(deposit_names => {
      this.deposit_names = deposit_names;
    });
  }

  public getCurrentTransactions(): void {
    this.transactionService.getTransactions('now').subscribe(
      transactions => {
        this.transactions = transactions;
        console.log(this.myTransactions);
        if (!this.myTransactions) {
          this.myTransactions = transactions.filter(transaction => {
            return !transaction.linked;
          });
        }
      });
    console.log('#getCurrentTransactions()');
  }

  setTransactionsToDisplay(transactions: Transaction[]) {
    this.myTransactions = transactions;
  }

}
