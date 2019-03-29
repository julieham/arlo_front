import {Component, OnInit} from '@angular/core';
import {Transaction} from '../types/transaction';
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


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  transactions: Transaction[];
  selectedTransactions: Transaction[];
  hideLinked = true;
  icons = {
    'Food': 'fas fa-apple-alt',
    'Restaurants': 'fas fa-utensils',
    'Laundry': 'fas fa-shower',
    'Snacks': 'fas fa-coffee',
    'Transports': 'fas fa-bicycle',
    'Home': 'fas fa-home',
    'Health': 'fas fa-heartbeat',
    'Bills': 'fas fa-file-invoice',
    'Fine Food': 'fas fa-store',
    'Shopping': 'fas fa-shopping-bag',
    'Fun': 'fas fa-theater-masks',
    'Input': 'fas fa-hand-holding-usd',
    'Deposit': 'fas fa-piggy-bank',
    '-': 'fas fa-question',
    'Link': 'fas fa-link'
  };

  private cycle: string;

  constructor(private transactionService: TransactionService,
              private setFieldsService: SetFieldsService,
              private refreshService: RefreshTransactionsService,
              private createTransactionService: CreateTransactionService,
              private cycleService: CycleService,
              private recurringTransactionService: RecurringTransactionService,
              private referenceNameMakerService: ReferenceNameMakerServiceService,
              public ref_dialog: MatDialog,
              public edit_dialog: MatDialog) { }

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

  private getTransactions(): void {
    this.transactionService.getTransactions(this.cycle).subscribe(transactions => {
      this.transactions = transactions;
      // console.log(this.transactions[0].category);
      // console.log(typeof this.transactions[0].category);
    });

  }

  openEditDialog(transaction: Transaction): void {
    this.edit_dialog.open(EditTransactionComponent, {
      width: '250px',
      data: {transaction: transaction}
    });
  }
}
