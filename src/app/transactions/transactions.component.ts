import {Component, Input, OnInit} from '@angular/core';
import {CategoryColors, Transaction} from '../types/transaction';
import { TransactionService } from '../services/transaction.service';
import {SetFieldsService} from '../services/set-fields.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';
import {CreateTransactionService} from '../services/create-transaction.service';
import {CycleService} from '../services/cycle.service';
import {RecurringTransactionService} from '../services/recurring-transaction.service';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ReferenceNameMakerComponent} from '../reference-name-maker/reference-name-maker.component';
import {ReferenceNameMakerServiceService} from '../services/reference-name-maker-service.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {


  transactions: Transaction[];
  selectedTransactions: Transaction[];

  @Input() cycle: string;
  hideLinked = true;

  private cycle: string;


  constructor(private transactionService: TransactionService,
              private setFieldsService: SetFieldsService,
              private refreshService: RefreshTransactionsService,
              private createTransactionService: CreateTransactionService,
              private cycleService: CycleService,
              private recurringTransactionService: RecurringTransactionService,
              private referenceNameMakerService: ReferenceNameMakerServiceService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.getTransactions();
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

  onRightClick(transaction: Transaction): boolean {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: transaction.id,
      bank_name: transaction.name
    };
    dialogConfig.width = '300px';

    this.dialog.open(ReferenceNameMakerComponent, dialogConfig);
    return false;
  }

  onHideLinkedChange(): void {
    this.getTransactions();
  }

  private getTransactions(): void {
    this.transactionService.getTransactions(this.cycle, this.hideLinked).subscribe(transactions => this.transactions = transactions);
  }

  getCategoryStyleClass(transaction: Transaction): string {
    return CategoryColors.CATEGORIES_COLORS[transaction.category];
  }
}
