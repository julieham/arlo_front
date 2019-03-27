import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../types/transaction';
import {SetFieldsService} from '../services/set-fields.service';

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

  onLink() {
    let transactionsIds: string[];
    transactionsIds = [];
    this.transactions.forEach(transaction => {
      transactionsIds.push(transaction.id);
    });
    this.setFieldsService.linkTransactions(transactionsIds).subscribe();
  }



}
