import { Component, OnInit } from '@angular/core';
import {AccountMetadata} from '../types/accounts';
import {AccountsInfosService} from '../services/accounts-infos.service';

@Component({
  selector: 'app-balances',
  templateUrl: './accounts-infos.component.html',
  styleUrls: ['./accounts-infos.component.css']
})

export class AccountsInfosComponent implements OnInit {

  accountsInfo: AccountMetadata[];

  constructor(private accountsInfosService: AccountsInfosService) { }

  ngOnInit() {
    this.getAccountsInfos();
  }

  private getAccountsInfos(): void {
    this.accountsInfosService.getAccountsInfos().subscribe(accountsInfo => this.accountsInfo = accountsInfo);
  }

}
