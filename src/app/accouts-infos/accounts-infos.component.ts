import { Component, OnInit } from '@angular/core';
import {AccountMetadata} from '../types/accounts';

@Component({
  selector: 'app-balances',
  templateUrl: './accounts-infos.component.html',
  styleUrls: ['./accounts-infos.component.css']
})

export class AccountsInfosComponent implements OnInit {

  a = new AccountMetadata('Julie', 872, 'EUR');
  b = new AccountMetadata('Thomus', 9, 'EUR');
  c = new AccountMetadata('Cash', 666, 'USD')

  accountsInfo: AccountMetadata[] = [this.a , this.b , this.c];


  constructor() { }

  ngOnInit() {
  }



}
