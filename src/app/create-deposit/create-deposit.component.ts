import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {DepositService} from '../services/deposit.service';
import {RecurringDeposit} from '../types/deposit';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-deposit',
  templateUrl: './create-deposit.component.html',
  styleUrls: ['./create-deposit.component.css']
})
export class CreateDepositComponent implements OnInit {

  private recurringDeposit: RecurringDeposit[];
  private checkedDeposit: boolean[];

  constructor(private depositService: DepositService,
              public dialogRef: MatDialogRef<CreateDepositComponent>) {
  }

  ngOnInit() {
    this.depositService.getRecurringDeposit().subscribe(recurringDeposit => {
      this.recurringDeposit = recurringDeposit;
      this.checkedDeposit = [false].concat(recurringDeposit.map(rec => rec.active));
    });
  }

  onSubmit(newDepositForm: NgForm) {
    this.depositService.createDepositTransactions(newDepositForm.value).subscribe();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  unselectAll(): void {
    for (let i = 0; i < this.checkedDeposit.length; i++) {
      this.checkedDeposit[i] = false;
    }
  }

}
