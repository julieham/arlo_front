import {Component, OnInit} from '@angular/core';
import {TransactionService} from '../services/transaction.service';
import {Transaction, Transactions} from '../types/transaction';
import {CategoryService} from '../services/category.service';
import {DepositService} from '../services/deposit.service';

@Component({
  selector: 'app-filter-transactions',
  templateUrl: './filter-transactions.component.html',
  styleUrls: ['./filter-transactions.component.css']
})
export class FilterTransactionsComponent implements OnInit {

  public availableCategories: string[] = [];
  private selectedTransactions: Transaction[] = [];
  public accounts: string[] = [];
  public categories: string[] = [];
  public deposit_names: string[] = [];
  public transactions: Transactions = new Transactions();
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
        this.transactions.setItems(transactions).filterLinked(true);
        this.availableCategories = this.transactions.getAvailableCategories();
      });
  }

  hideLinked(hideLinked: boolean) {
    this.transactions.filterLinked(hideLinked);
  }

  filterByCategories(categories: string[]) {
    this.transactions.filterByCategories(categories);
  }
}
