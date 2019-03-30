import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {NgForm} from '@angular/forms';
import {CategoryService} from '../services/category.service';
import {CycleService} from '../services/cycle.service';
import {SetFieldsService} from '../services/set-fields.service';
import {category_icons} from '../types/transaction';

@Component({
  selector: 'app-edit-transaction',
  templateUrl: './edit-transaction.component.html',
  styleUrls: ['./edit-transaction.component.css']
})
export class EditTransactionComponent implements OnInit {

  accounts: string[];
  categories: string[];
  cycles: string[];
  icons = category_icons;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private setFieldsService: SetFieldsService,
              private categoryService: CategoryService,
              private cycleService: CycleService,
              public dialogRef: MatDialogRef<EditTransactionComponent>) { }

  ngOnInit() {
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

}
