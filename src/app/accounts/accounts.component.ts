import {Component, OnInit} from '@angular/core';
import {Accounts, AmountItem} from '../types/accounts';
import {AccountsInfosService} from '../services/accounts-infos.service';
import {TransactionService} from '../services/transaction.service';
import {DepositService} from '../services/deposit.service';

@Component({
  selector: 'app-balances',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})

export class AccountsComponent implements OnInit {

  // TODO remove this shit
  accountsInfo: Accounts[] = [];
  all_times = true;
  amounts1: AmountItem[] = [{description: 'caca', amount: 4}, {description: 'prout', amount: -6.5}];
  amounts2: AmountItem[] = [{description: 'pipi', amount: 2}, {description: 'popo', amount: -2}];


  deposit: AmountItem[];
  bank: AmountItem[];
  cycle: AmountItem[];

  items: AmountItem[];


  constructor(private accountsInfosService: AccountsInfosService,
              private transactionService: TransactionService,
              private depositService: DepositService) {
  }

  ngOnInit() {
    this.transactionService.transactionsChanged.subscribe(cycle => {
        this.getAccountsInfos(cycle);
        this.getBankAmounts(cycle);
        this.getCycleAmounts(cycle);
        this.getDepositAmounts();
      }
    );

    this.items = [];
  }


  private getAccountsInfos(cycle: string): void {
    this.accountsInfosService.getAccountsInfos(cycle).subscribe(accountsInfo => this.accountsInfo = accountsInfo);
  }

  make_items_deposit() {
    this.items = this.deposit;
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

  private getDepositAmounts(): void {
    this.depositService.getAmountsDeposit().subscribe(amounts => this.deposit = amounts);
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
  // onAccountClick(account: string): void {
  //   this.transactionService.accountClick.emit(account);
  // }
  //
  // private get_total_deposit(): number {
  //   return this.deposit.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  // }

}
