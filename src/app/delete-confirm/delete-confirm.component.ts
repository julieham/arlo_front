import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {category_icons, Transaction} from '../types/transaction';
import {TransactionService} from '../services/transaction.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss']
})
export class DeleteConfirmComponent implements OnInit {

  icons = category_icons;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private transactionService: TransactionService,
              public dialogRef: MatDialogRef<DeleteConfirmComponent>) {
  }

  ngOnInit() {
  }

  onDelete(transaction: Transaction) {
    this.transactionService.delete(transaction).subscribe();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
