import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CreateTransactionService} from '../services/create-transaction.service';
import {MatDialogRef} from '@angular/material';
import {CategoryService} from '../services/category.service';
import {category_icons} from '../types/transaction';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  accounts: string[];
  categories: string[];
  selected = 'false';
  icons = category_icons;

  constructor(private createTransactionService: CreateTransactionService,
              private categoryService: CategoryService,
              public dialogRef: MatDialogRef<CreateTransactionComponent>) { }

  ngOnInit() {
    this.createTransactionService.getAllAccounts().subscribe( accounts => {
      this.accounts = accounts;
    });
    this.categoryService.getAllCategories().subscribe( categories => {
      this.categories = categories;
    });
  }

  onSubmit(newTransactionForm: NgForm) {
     this.createTransactionService.createTransaction(newTransactionForm.value).subscribe();
     this.dialogRef.close();
  }

  onNoClick(): void {
   this.dialogRef.close();
  }

}
