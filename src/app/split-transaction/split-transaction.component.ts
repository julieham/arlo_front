import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SetFieldsService} from '../services/set-fields.service';
import {CategoryService} from '../services/category.service';
import {CycleService} from '../services/cycle.service';
import {category_icons} from '../types/transaction';
import {TransactionService} from '../services/transaction.service';


@Component({
  selector: 'app-split-transaction',
  templateUrl: './split-transaction.component.html',
  styleUrls: ['./split-transaction.component.css']
})
export class SplitTransactionComponent implements OnInit {

  categories: string[];
  cycles: string[];
  icons = category_icons;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private setFieldsService: SetFieldsService,
              private categoryService: CategoryService,
              private cycleService: CycleService,
              private transactionService: TransactionService,
              public dialogRef: MatDialogRef<SplitTransactionComponent>
  ) {
  }

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    });

    this.cycleService.getAllCycle().subscribe(cycles => {
      this.cycles = cycles.all_cycles;
    });
  }

  onSubmit(splitTransactionForm: NgForm) {
    this.transactionService.splitTransaction(splitTransactionForm.value).subscribe();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  minAmount(transaction): number {
    if (transaction.amount > 0) {
      return 0;
    }
    return transaction.amount;
  }

  maxAmount(transaction): number {
    if (transaction.amount > 0) {
      return transaction.amount;
    }
    return 0;
  }
}
