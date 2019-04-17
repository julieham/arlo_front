import {Component, Inject} from '@angular/core';
import {CreateTransactionService} from '../services/create-transaction.service';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-recurring-transactions',
  templateUrl: './recurring-transactions.component.html',
  styleUrls: ['./recurring-transactions.component.css']
})
export class RecurringTransactionsComponent {

  how_many_recurring = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private createTransactionService: CreateTransactionService,
              public dialogRef: MatDialogRef<RecurringTransactionsComponent>) {
    for (let i = 0; i < data.recurring_transactions.length; i++) {
      this.how_many_recurring[data.recurring_transactions[i]] = 0;
    }
  }

  onSubmit(editTransactionForm: NgForm) {
    this.createTransactionService.createSingleRecurringTransaction(editTransactionForm.value).subscribe();
    this.dialogRef.close();
  }

  createSeveralRecurring(): void {
    this.createTransactionService.createSeveralRecurringTransaction(this.how_many_recurring).subscribe();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  raz_number(name: string): void {
    this.how_many_recurring[name] = 0;
  }

  add_one(name: string): void {
    this.how_many_recurring[name]++;
  }

}
