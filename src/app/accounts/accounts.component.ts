import {Component, OnInit} from '@angular/core';
import {Accounts, AmountItem} from '../types/accounts';
import {AccountsInfosService} from '../services/accounts-infos.service';
import {TransactionService} from '../services/transaction.service';

@Component({
  selector: 'app-balances',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit {

  // TODO remove this shit
  accountsInfo: Accounts[] = [];

  bank: AmountItem[];
  cycle: AmountItem[];

  items: AmountItem[];


  constructor(private accountsInfosService: AccountsInfosService,
              private transactionService: TransactionService) {
  }

  ngOnInit() {
    this.transactionService.transactionsChanged.subscribe(cycle => {
        this.getAccountsInfos(cycle);
        this.getBankAmounts(cycle);
        this.getCycleAmounts(cycle);
      }
    );

    this.items = [];
  }


  private getAccountsInfos(cycle: string): void {
    this.accountsInfosService.getAccountsInfos(cycle).subscribe(accountsInfo => this.accountsInfo = accountsInfo);
  }

  make_items_bank() {
    this.items = this.bank;
  }

  make_items_cycle() {
    this.items = this.cycle;
  }

  make_items_empty() {
    this.items = [];
  }

  private getBankAmounts(cycle: string): void {
    this.accountsInfosService.getBankAmounts(cycle).subscribe(amounts => this.bank = amounts);
  }

  private getCycleAmounts(cycle: string): void {
    this.accountsInfosService.getCycleAmounts(cycle).subscribe(amounts => this.cycle = amounts);
  }

  // toggleAmount() {
  //   this.all_times = !this.all_times;
  // }
  //
  // get_amount(account) {
  //   if (this.all_times) {
  //     return account.all_times;
  //   }
  //   return account.this_cycle;
  // }
  //
  // private get_total_amount_this_cycle(): number {
  //   return this.accountsInfo.map(t => t.this_cycle).reduce((acc, value) => acc + value, 0);
  // }
  //
  // private get_total_deposit(): number {
  //   return this.deposit.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  // }

}
