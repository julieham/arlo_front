import {Component, Inject, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {CreateTransactionService} from '../services/create-transaction.service';
import {Accounts} from '../types/accounts';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DialogData} from '../creator/creator.component';

@Component({
  selector: 'app-create-transaction',
  templateUrl: './create-transaction.component.html',
  styleUrls: ['./create-transaction.component.css']
})
export class CreateTransactionComponent implements OnInit {

  accounts: string[];
  selected = 'false';

  constructor(private createTransactionService: CreateTransactionService,
              public dialogRef: MatDialogRef<CreateTransactionComponent>) { }

  ngOnInit() {
    this.createTransactionService.getAllAccounts().subscribe( accounts => {
      this.accounts = accounts;
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
