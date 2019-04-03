import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {SetFieldsService} from '../services/set-fields.service';
import {category_icons} from '../types/transaction';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.scss']
})
export class DeleteConfirmComponent implements OnInit {

  icons = category_icons;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private setFieldsService: SetFieldsService,
              public dialogRef: MatDialogRef<DeleteConfirmComponent>) {
  }

  ngOnInit() {
  }

  onDelete(id: string) {
    this.setFieldsService.deleteTransaction(id).subscribe();
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
