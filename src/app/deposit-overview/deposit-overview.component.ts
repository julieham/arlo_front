import {OnInit} from '@angular/core';
import {AmountItem} from '../types/accounts';
import {DepositService} from '../services/deposit.service';
import {Transaction} from '../types/transaction';
import {DeleteConfirmComponent} from '../delete-confirm/delete-confirm.component';
import {MatDialog} from '@angular/material';
import {MatDialogConfig} from '@angular/material/dialog';
import {ReferenceDepositMakerComponent} from '../reference-deposit-maker/reference-deposit-maker.component';
import {CategoryService} from '../services/category.service';
import {SetFieldsService} from '../services/set-fields.service';

export abstract class DepositOverviewComponent implements OnInit {

  categories: string[];

  deposit: AmountItem[] = [];
  transactions: Transaction[] = [];

  constructor(public dialog: MatDialog,
              private depositService: DepositService,
              private categoryService: CategoryService,
              private setFieldsService: SetFieldsService) {
  }

  transactionCanBeDeleted(transaction: Transaction): boolean {
    return (transaction.type === 'DEP_Hello' || transaction.account === 'Cash');
  }

  transactionIsReal(transaction: Transaction): boolean {
    return transaction.type !== 'DEP_Hello';
  }

  ngOnInit() {
    this.getDepositAmounts();
    this.getDepositTransactions();
    this.depositService.depositChanged.subscribe(() => {
      this.getDepositAmounts();
      this.getDepositTransactions();
    });
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  private getDepositAmounts(): void {
    this.depositService.getAmountsDeposit().subscribe(amounts => this.deposit = amounts);
  }

  private getDepositTransactions(): void {
    this.depositService.getTransactionsDeposit().subscribe(transactions => this.transactions = transactions);
  }

  private openDeleteDialog(transaction: Transaction): void {
    this.dialog.open(DeleteConfirmComponent, {
      data: {transaction: transaction}
    });
  }

  private removeFromDeposit(transaction: Transaction): void {
    this.depositService.unsetDebitDeposit(transaction.id).subscribe();
  }

  openReferenceDialog(transaction: Transaction): boolean {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: transaction.id,
      deposit: transaction.deposit
    };
    dialogConfig.width = '300px';

    this.dialog.open(ReferenceDepositMakerComponent, dialogConfig);
    return false;
  }

  onCategoryClick(id: string, category: string): void {
    const fields = {'id': id, 'category': category};
    this.setFieldsService.editTransaction(JSON.stringify(fields)).subscribe(() =>
      this.depositService.depositChanged.emit());
  }
}
