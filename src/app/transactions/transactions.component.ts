import {Component, OnInit} from '@angular/core';
import {category_icons, Transaction} from '../types/transaction';
import {TransactionService} from '../services/transaction.service';
import {SetFieldsService} from '../services/set-fields.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';
import {CreateTransactionService} from '../services/create-transaction.service';
import {CycleService} from '../services/cycle.service';
import {RecurringTransactionService} from '../services/recurring-transaction.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ReferenceNameMakerComponent} from '../reference-name-maker/reference-name-maker.component';
import {ReferenceNameMakerServiceService} from '../services/reference-name-maker-service.service';
import {EditTransactionComponent} from '../edit-transaction/edit-transaction.component';
import {SplitTransactionComponent} from '../split-transaction/split-transaction.component';


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

  private cycle: string;

  constructor(private transactionService: TransactionService,
              private setFieldsService: SetFieldsService,
              private refreshService: RefreshTransactionsService,
              private createTransactionService: CreateTransactionService,
              private cycleService: CycleService,
              private recurringTransactionService: RecurringTransactionService,
              private referenceNameMakerService: ReferenceNameMakerServiceService,
              public ref_dialog: MatDialog,
              public edit_dialog: MatDialog,
              public split_dialog: MatDialog) {
  }

  ngOnInit() {
    this.selectedTransactions = [];
    this.cycleService.currentCycle.subscribe(cycle => {

      this.cycle = cycle;
      this.getTransactions();
    });

    this.setFieldsService.transactionsModified.subscribe(() => {
      this.selectedTransactions = [];
      this.getTransactions();
    });

    this.refreshService.refreshed.subscribe(() => {
      this.getTransactions();
    });

    this.createTransactionService.created.subscribe( () => {
      this.getTransactions();
    });
    this.recurringTransactionService.created.subscribe(() => {
      this.getTransactions();
    });

    this.referenceNameMakerService.referenceCreated.subscribe(() => {
      this.getTransactions();
    });

    this.transactionService.transactionsSplit.subscribe(() => this.getTransactions());
  }

  onClick(transaction: Transaction): void {
    if (this.selectedTransactions.includes(transaction)) {
      this.selectedTransactions.splice(this.selectedTransactions.indexOf(transaction), 1);
    } else {
      this.selectedTransactions.push(transaction);
    }
  }

  openReferenceDialog(transaction: Transaction): boolean {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: transaction.id,
      bank_name: transaction.bank_name
    };
    dialogConfig.width = '300px';

    this.ref_dialog.open(ReferenceNameMakerComponent, dialogConfig);
    return false;
  }

  onUnlinkClick(id: string): void {
    this.setFieldsService.unlinkTransaction(id).subscribe();
  }

  onSplitClick(transaction: Transaction): void {
    this.split_dialog.open(SplitTransactionComponent, {
      width: '1000px',
      data: {transaction: transaction}
    });
  }

  private getTransactions(): void {
    this.transactionService.getTransactions(this.cycle).subscribe(transactions => {
      this.transactions = transactions;
    });

  }

  openEditDialog(transaction: Transaction): void {
    this.edit_dialog.open(EditTransactionComponent, {
      width: '250px',
      data: {transaction: transaction}
    });
  }
}
