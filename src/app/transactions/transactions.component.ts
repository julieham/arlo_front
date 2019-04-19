import {Component, OnInit} from '@angular/core';
import {category_icons, Transaction} from '../types/transaction';
import {TransactionService} from '../services/transaction.service';
import {SetFieldsService} from '../services/set-fields.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';
import {CreateTransactionService} from '../services/create-transaction.service';
import {CycleService} from '../services/cycle.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ReferenceNameMakerComponent} from '../reference-name-maker/reference-name-maker.component';
import {ReferenceNameMakerServiceService} from '../services/reference-name-maker-service.service';
import {EditTransactionComponent} from '../edit-transaction/edit-transaction.component';
import {SplitTransactionComponent} from '../split-transaction/split-transaction.component';
import {DeleteConfirmComponent} from '../delete-confirm/delete-confirm.component';
import {CategoryService} from '../services/category.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[];
  selectedTransactions: Transaction[];
  hideLinked = true;
  icons = category_icons;
  filteredCategories: string[];
  filteredAccounts: string[];
  accounts: string[];

  private cycle: string;

  constructor(private transactionService: TransactionService,
              private setFieldsService: SetFieldsService,
              private refreshService: RefreshTransactionsService,
              private createTransactionService: CreateTransactionService,
              private cycleService: CycleService,
              private referenceNameMakerService: ReferenceNameMakerServiceService,
              private categoryService: CategoryService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.selectedTransactions = [];
    this.filteredCategories = [];
    this.filteredAccounts = [];
    this.cycleService.currentCycle.subscribe(cycle => {
      this.cycle = cycle;
      this.getTransactions();
    });

    this.setFieldsService.transactionsModified.subscribe(() => {
      this.selectedTransactions = [];
      this.getTransactions();
    });

    this.refreshService.refreshed.subscribe(() => this.getTransactions());
    this.createTransactionService.created.subscribe(() => this.getTransactions());
    this.referenceNameMakerService.referenceCreated.subscribe(() => this.getTransactions());
    this.transactionService.transactionsSplit.subscribe(() => this.getTransactions());

    this.transactionService.categoryClick.subscribe(category => {
      this.toggleCategory(category);
    });
    this.transactionService.accountClick.subscribe(account => {
      this.toggleAccount(account);
    });
    this.categoryService.getAllAccounts().subscribe(accounts => {
      this.accounts = accounts;
    });
  }

  displayTransaction(transaction): boolean {
    return ((!this.hideLinked || !transaction.linked) &&
      this.acceptedCategory(transaction.category) &&
      this.acceptedAccount(transaction.account));
  }

  onClick(transaction: Transaction): void {
    if (this.selectedTransactions.includes(transaction)) {
      this.removeSelected(transaction);
    } else {
      this.selectedTransactions.push(transaction);
    }
  }


  removeSelected(transaction: Transaction): void {
    this.removeSelectedTransactionIndex(this.selectedTransactions.indexOf(transaction));
  }

  removeSelectedTransactionIndex(index: number): void {
    this.selectedTransactions.splice(index, 1);
  }

  openReferenceDialog(transaction: Transaction): boolean {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: transaction.id,
      bank_name: transaction.bank_name
    };
    dialogConfig.width = '300px';

    this.dialog.open(ReferenceNameMakerComponent, dialogConfig);
    return false;
  }

  onUnlinkClick(id: string): void {
    this.setFieldsService.unlinkTransaction(id).subscribe();
  }

  onSplitClick(transaction: Transaction): void {
    this.dialog.open(SplitTransactionComponent, {
      data: {transaction: transaction}
    });
  }

  onTransferClick(id: string, account: string): void {
    console.log('TRANSFER');
    console.log(account);
    console.log(id);
    this.transactionService.transferTransaction(id, account).subscribe();
  }

  private openDeleteDialog(transaction: Transaction): void {
    this.dialog.open(DeleteConfirmComponent, {
      height: '250px',
      data: {transaction: transaction}
    });
  }

  private getTransactions(): void {
    this.transactionService.getTransactions(this.cycle).subscribe(transactions => {
      this.transactions = transactions;
    });
  }

  private openEditDialog(transaction: Transaction): void {
    this.dialog.open(EditTransactionComponent, {
      data: {transaction: transaction}
    });
  }

  private acceptedCategory(category: string): boolean {
    return this.filteredCategories.length === 0 ||
      this.filteredCategories.includes(category);
  }

  private acceptedAccount(account: string): boolean {
    return this.filteredAccounts.length === 0 ||
      this.filteredAccounts.includes(account);
  }

  private razFilterCategories(): void {
    this.filteredCategories = [];
  }

  private razFilterAccounts(): void {
    this.filteredAccounts = [];
  }

  private toggleAccount(account) {
    if (this.filteredAccounts.includes(account)) {
      this.filteredAccounts.splice(this.filteredAccounts.indexOf(account), 1);
      this.selectedTransactions = [];
    } else {
      this.filteredAccounts.push(account);
    }
    this.unselectInvisibleTransactions();
  }

  private unselectInvisibleTransactions() {
    const to_remove_indexes = [];
    for (let i = 0; i < this.selectedTransactions.length; i++) {
      if (!this.acceptedCategory(this.selectedTransactions[i].category)
        ||
        !this.acceptedAccount(this.selectedTransactions[i].account)
      ) {
        to_remove_indexes.push(i);
      }
    }
    for (const index of to_remove_indexes.reverse()) {
      this.removeSelectedTransactionIndex(index);
    }
  }

  private toggleCategory(category) {
    if (this.filteredCategories.includes(category)) {
      this.filteredCategories.splice(this.filteredCategories.indexOf(category), 1);
    } else {
      this.filteredCategories.push(category);
    }
    this.unselectInvisibleTransactions();
  }

  private totalSelectedTransactions(): number {
    return this.selectedTransactions.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }

  toggleHideLinked() {
    this.hideLinked = !this.hideLinked;
  }
}
