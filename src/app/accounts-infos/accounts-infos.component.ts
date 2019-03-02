import { Component, OnInit } from '@angular/core';
import {AccountMetadata} from '../types/accounts';
import {AccountsInfosService} from '../services/accounts-infos.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';
import {CycleService} from '../services/cycle.service';

@Component({
  selector: 'app-balances',
  templateUrl: './accounts-infos.component.html',
  styleUrls: ['./accounts-infos.component.css']
})

export class AccountsInfosComponent implements OnInit {

  accountsInfo: AccountMetadata[];
  cycle: string;

  constructor(private accountsInfosService: AccountsInfosService,
              private refreshService: RefreshTransactionsService,
              private cycleService: CycleService) { }

  ngOnInit() {
    this.cycleService.currentCycle.subscribe(cycle => this.cycle = cycle);
    this.getAccountsInfos();
    this.refreshService.refreshed.subscribe( () => {
      this.getAccountsInfos();
    });
    this.cycleService.currentCycle.subscribe( () => {
      this.getAccountsInfos();
    });
  }

  private getAccountsInfos(): void {
    this.accountsInfosService.getAccountsInfos(this.cycle).subscribe(accountsInfo => this.accountsInfo = accountsInfo);
  }

}
