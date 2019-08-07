import {Component, OnInit} from '@angular/core';
import {AmountItem} from '../types/accounts';
import {DepositService} from '../services/deposit.service';
import {Transaction} from '../types/transaction';
import {DeleteConfirmComponent} from '../delete-confirm/delete-confirm.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-deposit-overview',
  templateUrl: './deposit-overview.component.html',
  styleUrls: ['./deposit-overview.component.css']
})
export class DepositOverviewComponent implements OnInit {

  deposit: AmountItem[];
  transactions: Transaction[] = [];

  constructor(public dialog: MatDialog,
              private depositService: DepositService) {
  }

  ngOnInit() {
    this.getDepositAmounts();
    this.getDepositTransactions();
    this.depositService.depositChanged.subscribe(() => {
      this.getDepositAmounts();
      this.getDepositTransactions();
    });
  }

  private getDepositAmounts(): void {
    this.depositService.getAmountsDeposit().subscribe(amounts => this.deposit = amounts);
  }

  private getDepositTransactions(): void {
    this.depositService.getTransactionsDeposit().subscribe(transactions => this.transactions = transactions);
  }

  private openDeleteDialog(transaction: Transaction): void {
    this.dialog.open(DeleteConfirmComponent, {
      data: {transaction: transaction}
    });
  }

  private removeFromDeposit(transaction: Transaction): void {
    this.depositService.unsetDebitDeposit(transaction.id).subscribe();
  }

  private transactionCanBeDeleted(transaction: Transaction): boolean {
    return (transaction.type === 'DEP_Hello' || transaction.account === 'Cash');
  }

  private transactionIsReal(transaction: Transaction): boolean {
    return transaction.type !== 'DEP_Hello';
  }
}
