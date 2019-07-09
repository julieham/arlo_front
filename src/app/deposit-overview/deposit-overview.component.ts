import {Component, OnInit} from '@angular/core';
import {AmountItem} from '../types/accounts';
import {DepositService} from '../services/deposit.service';

@Component({
  selector: 'app-deposit-overview',
  templateUrl: './deposit-overview.component.html',
  styleUrls: ['./deposit-overview.component.css']
})
export class DepositOverviewComponent implements OnInit {

  deposit: AmountItem[];

  constructor(private depositService: DepositService) {
  }

  ngOnInit() {
    this.getDepositAmounts();
  }

  private getDepositAmounts(): void {
    this.depositService.getAmountsDeposit().subscribe(amounts => this.deposit = amounts);
  }

}
