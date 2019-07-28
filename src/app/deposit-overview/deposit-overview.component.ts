import {Component, OnInit} from '@angular/core';
import {AmountItem} from '../types/accounts';
import {DepositService} from '../services/deposit.service';
import {Transaction} from '../types/transaction';

@Component({
  selector: 'app-deposit-overview',
  templateUrl: './deposit-overview.component.html',
  styleUrls: ['./deposit-overview.component.css']
})
export class DepositOverviewComponent implements OnInit {

  deposit: AmountItem[];
  transactions: Transaction[] = [];

  constructor(private depositService: DepositService) {
  }

  ngOnInit() {
    this.getDepositAmounts();
    this.getDepositTransactions();
  }

  private getDepositAmounts(): void {
    this.depositService.getAmountsDeposit().subscribe(amounts => this.deposit = amounts);
  }

  private getDepositTransactions(): void {
    this.depositService.getTransactionsDeposit().subscribe(transactions => this.transactions = transactions);
  }

}
