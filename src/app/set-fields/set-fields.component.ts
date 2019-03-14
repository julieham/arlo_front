import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../types/transaction';
import {SetFieldsService} from '../services/set-fields.service';
import {TransactionService} from '../services/transaction.service';

@Component({
  selector: 'app-set-fields',
  templateUrl: './set-fields.component.html',
  styleUrls: ['./set-fields.component.css']
})
export class SetFieldsComponent implements OnInit {

  fieldInput = '-';
  @Input() transactions: Transaction[];


  constructor(private setFieldsService: SetFieldsService) { }

  ngOnInit() {
  }

  onApply() {
    let transactionsIds: string[];
    transactionsIds = [];
    this.transactions.forEach(transaction => {
        transaction.category = this.fieldInput;
        transactionsIds.push(transaction.id);
      });
    this.setFieldsService.setCategory(transactionsIds, this.fieldInput).subscribe();
  }

  onLink() {
    let transactionsIds: string[];
    transactionsIds = [];
    this.transactions.forEach(transaction => {
      transactionsIds.push(transaction.id);
    });
    this.setFieldsService.linkTransactions(transactionsIds).subscribe();
  }

  onUnlink() {
    let transactionsIds: string[];
    transactionsIds = [];
    this.transactions.forEach(transaction => {
      transactionsIds.push(transaction.id);
    });
    this.setFieldsService.unlinkTransactions(transactionsIds).subscribe();
  }

  onChangeName() {
    let transactionsIds: string[];
    transactionsIds = [];
    this.transactions.forEach(transaction => {
      transaction.name = this.fieldInput;
      transactionsIds.push(transaction.id);
    });
    this.setFieldsService.changeName(transactionsIds, this.fieldInput).subscribe();
  }

  changeCycle() {
    let transactionsIds: string[];
    transactionsIds = [];
    this.transactions.forEach(transaction => {
      transactionsIds.push(transaction.id);
    });
    this.setFieldsService.changeCycle(transactionsIds, this.fieldInput).subscribe();
  }


}
