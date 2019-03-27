import {Component, OnInit} from '@angular/core';
import {Accounts} from '../types/accounts';
import {AccountsInfosService} from '../services/accounts-infos.service';
import {TransactionService} from '../services/transaction.service';

@Component({
  selector: 'app-balances',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit {

  accountsInfo: Accounts[] = [];
  displayedColumns: string[] = ['name', 'this_cycle', 'all_times'];

  constructor(private accountsInfosService: AccountsInfosService,
              private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.transactionService.transactionsChanged.subscribe(cycle =>
      this.getAccountsInfos(cycle)
    );
  }

  private getAccountsInfos(cycle: string): void {
    this.accountsInfosService.getAccountsInfos(cycle).subscribe(accountsInfo => this.accountsInfo = accountsInfo);
  }

}
