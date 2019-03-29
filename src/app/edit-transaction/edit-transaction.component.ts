import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../services/category.service';
import {CycleService} from '../services/cycle.service';
import {SetFieldsService} from '../services/set-fields.service';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  accounts: string[];
  categories: string[];
  cycles: string[];
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private setFieldsService: SetFieldsService,
              private categoryService: CategoryService,
              private cycleService: CycleService,
              public dialogRef: MatDialogRef<EditTransactionComponent>) { }

  ngOnInit() {
    console.log(this.data);
    this.categoryService.getAllCategories().subscribe( categories => {
      this.categories = categories;
    });

    this.cycleService.getAllCycle().subscribe( cycles => {
      this.cycles = cycles;
    });

  }

  onSubmit(editTransactionForm: NgForm) {
    this.setFieldsService.editTransaction(editTransactionForm.value).subscribe();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  // onSubmit(EditTransactionForm: ngForm): void {
  //   this.dialogRef.close()
  // }
}
