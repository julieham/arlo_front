import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {CreateTransactionService} from '../services/create-transaction.service';
import {CategoryService} from '../services/category.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';
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
