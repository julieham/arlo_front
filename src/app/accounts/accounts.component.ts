import { Component, OnInit } from '@angular/core';
import {Accounts} from '../types/accounts';
import {AccountsInfosService} from '../services/accounts-infos.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';
import {CycleService} from '../services/cycle.service';

@Component({
  selector: 'app-balances',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit {

  accountsInfo: Accounts[] = [];
  displayedColumns: string[] = ['name', 'this_cycle', 'all_times'];

  private cycle: string;

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
