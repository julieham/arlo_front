import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';
import {CreateTransactionComponent} from '../create-transaction/create-transaction.component';


@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css'],
})

export class CreatorComponent {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(CreateTransactionComponent, {
      width: '250px'
    });
  }

}
