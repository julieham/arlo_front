import {Component, OnInit} from '@angular/core';
import {Accounts} from '../types/accounts';
import {AccountsInfosService} from '../services/accounts-infos.service';
import {TransactionService} from '../services/transaction.service';
import {DepositService} from '../services/deposit.service';
import {DepositState} from '../types/deposit';

@Component({
  selector: 'app-balances',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit {

  accountsInfo: Accounts[] = [];
  all_times = true;
  hide_auto = true;
  depositState: DepositState[] = [];

  constructor(private accountsInfosService: AccountsInfosService,
              private transactionService: TransactionService,
              private depositService: DepositService) {
  }

  ngOnInit() {
    this.transactionService.transactionsChanged.subscribe(cycle =>
      this.getAccountsInfos(cycle)
    );
    this.depositService.getStateDeposit().subscribe(depositState =>
      this.depositState = depositState
    );
  }

  private getAccountsInfos(cycle: string): void {
    this.accountsInfosService.getAccountsInfos(cycle).subscribe(accountsInfo => this.accountsInfo = accountsInfo);
  }

  toggleAmount() {
    this.all_times = !this.all_times;
  }

  toggleFilterAuto() {
    this.hide_auto = !this.hide_auto;
  }

  get_amount(account) {
    if (this.all_times) {
      return account.all_times;
    }
    return account.this_cycle;
  }

  private get_total_amount_this_cycle(): number {
    return this.accountsInfo.map(t => t.this_cycle).reduce((acc, value) => acc + value, 0);
  }

  onAccountClick(account: string): void {
    this.transactionService.accountClick.emit(account);
  }

  private get_total_deposit(): number {
    return this.depositState.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }

}
