import {Component, OnInit} from '@angular/core';
import {Accounts, AmountItem} from '../types/accounts';
import {AccountsInfosService} from '../services/accounts-infos.service';
import {TransactionService} from '../services/transaction.service';
import {MatDialog} from '@angular/material';
import {DisplayTransferComponent} from '../display-transfer/display-transfer.component';

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
              private transactionService: TransactionService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.transactionService.transactionsChanged.subscribe(cycle => {
        this.getBankAmounts(cycle);
        this.getCycleAmounts(cycle);
      }
    );
    this.items = [];
    this.accountsInfosService.getBankAmounts('now').subscribe(amounts => this.items = amounts);
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
    this.accountsInfosService.getBankAmounts(cycle).subscribe(amounts => {
      this.bank = amounts;
      if (this.items === []) {
        this.items = amounts;
        console.log(this.items);
      }
    });
  }

  private getCycleAmounts(cycle: string): void {
    this.accountsInfosService.getCycleAmounts(cycle).subscribe(amounts => this.cycle = amounts);
  }

  private displayTransfers(): void {
    this.dialog.open(DisplayTransferComponent);
  }
}
