import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CreateTransactionService} from '../services/create-transaction.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  accounts: string[];
  categories: string[];
  selected = 'false';

  constructor(private createTransactionService: CreateTransactionService,
              public dialogRef: MatDialogRef<CreateTransactionComponent>) { }

  ngOnInit() {
    this.createTransactionService.getAllAccounts().subscribe( accounts => {
      this.accounts = accounts;
    });
    this.createTransactionService.getAllCategories().subscribe( categories => {
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
