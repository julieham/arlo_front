import {Component, OnInit} from '@angular/core';
import {AmountItem} from '../types/accounts';
import {AccountsInfosService} from '../services/accounts-infos.service';
import {TransactionService} from '../services/transaction.service';
import {MatDialog} from '@angular/material';
import {DisplayTransferComponent} from '../display-transfer/display-transfer.component';
import {CycleService} from '../services/cycle.service';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})

export class BalancesComponent implements OnInit {

  bank: AmountItem[];
  cycle: AmountItem[];
  input: AmountItem[];
  items: AmountItem[];
  display_total = false;

  constructor(private cycleService: CycleService,
              private accountsInfosService: AccountsInfosService,
              private transactionService: TransactionService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    this.get_all_amounts();
    this.transactionService.transactionsChanged.subscribe(() => this.get_all_amounts());
    this.items = [];
    this.accountsInfosService.getBankAmounts('now').subscribe(amounts => this.items = amounts);
  }

  get_all_amounts() {
    this.cycleService.currentCycle.subscribe(cycle => {
      this.getBankAmounts(cycle);
      this.getCycleAmounts(cycle);
      this.getInputAmounts(cycle);
    });
  }

  make_items_bank() {
    this.items = this.bank;
    this.display_total = false;
  }

  make_items_cycle() {
    this.items = this.cycle;
    this.display_total = true;
  }

  make_items_input() {
    this.items = this.input;
    this.display_total = false;
  }

  private getBankAmounts(cycle: string): void {
    this.accountsInfosService.getBankAmounts(cycle).subscribe(amounts => {
      this.bank = amounts;
      if (this.items === []) {
        this.items = amounts;
      }
    });
  }

  private getCycleAmounts(cycle: string): void {
    this.accountsInfosService.getCycleAmounts(cycle).subscribe(amounts => this.cycle = amounts);
  }

  private getInputAmounts(cycle: string): void {
    this.accountsInfosService.getInputAmounts(cycle).subscribe(amounts => this.input = amounts);
  }

  displayTransfers(): void {
    this.dialog.open(DisplayTransferComponent);
  }
}
