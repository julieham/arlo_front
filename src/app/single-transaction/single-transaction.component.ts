import {Component, Input, OnInit} from '@angular/core';
import {category_icons, Transaction} from '../types/transaction';

@Component({
  selector: 'app-single-transaction',
  templateUrl: './single-transaction.component.html',
  styleUrls: ['./single-transaction.component.scss']
})
export class SingleTransactionComponent implements OnInit {

  @Input() transaction: Transaction;
  @Input() selectedTransactions: Transaction[];
  @Input() mobile = false;
  icons = category_icons;

  constructor() { }

  ngOnInit() {
  }

  onClick(transaction: Transaction): void {
    if (this.selectedTransactions.includes(transaction)) {
      this.removeSelected(transaction);
    } else {
      this.selectedTransactions.push(transaction);
    }
  }

  removeSelected(transaction: Transaction): void {
    this.removeSelectedTransactionIndex(this.selectedTransactions.indexOf(transaction));
  }

  removeSelectedTransactionIndex(index: number): void {
    this.selectedTransactions.splice(index, 1);
  }

}
