import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../types/transaction';
import {EditTransactionComponent} from '../edit-transaction/edit-transaction.component';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {ReferenceNameMakerComponent} from '../reference-name-maker/reference-name-maker.component';
import {SplitTransactionComponent} from '../split-transaction/split-transaction.component';
import {SetFieldsService} from '../services/set-fields.service';
import {TransactionService} from '../services/transaction.service';
import {DeleteConfirmComponent} from '../delete-confirm/delete-confirm.component';
import {DepositService} from '../services/deposit.service';

@Component({
  selector: 'app-transaction-menu',
  templateUrl: './transaction-menu.component.html',
  styleUrls: ['./transaction-menu.component.css']
})
export class TransactionMenuComponent implements OnInit {

  @Input() transaction: Transaction;
  @Input() accounts: string[];
  @Input() categories: string[];
  @Input() local_cycles: string[];
  @Input() deposit_names: string[];

  constructor(public dialog: MatDialog,
              private setFieldsService: SetFieldsService,
              private transactionService: TransactionService,
              private depositService: DepositService) { }

  ngOnInit() {
  }

  private openEditDialog(transaction: Transaction): void {
    this.dialog.open(EditTransactionComponent, {
      data: {transaction: transaction}
    });
  }

  openReferenceDialog(transaction: Transaction): boolean {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: transaction.id,
      bank_name: transaction.bank_name
    };
    dialogConfig.width = '300px';

    this.dialog.open(ReferenceNameMakerComponent, dialogConfig);
    return false;
  }

  onUnlinkClick(id: string): void {
    this.setFieldsService.unlinkTransaction(id).subscribe();
  }

  onSplitClick(transaction: Transaction): void {
    this.dialog.open(SplitTransactionComponent, {
      data: {transaction: transaction}
    });
  }

  onTransferClick(id: string, account: string): void {
    this.transactionService.transferTransaction(id, account).subscribe();
  }

  onDepositClick(id: string, deposit_name: string): void {
    this.depositService.setDebitDeposit(id, deposit_name).subscribe();
  }

  onCycleClick(id: string, cycle: string): void {
    const fields = {'id': id, 'cycle': cycle};
    this.setFieldsService.editTransaction(JSON.stringify(fields)).subscribe();
  }

  onCategoryClick(id: string, category: string): void {
    const fields = {'id': id, 'category': category};
    this.setFieldsService.editTransaction(JSON.stringify(fields)).subscribe();
  }

  private openDeleteDialog(transaction: Transaction): void {
    this.dialog.open(DeleteConfirmComponent, {
      height: '250px',
      data: {transaction: transaction}
    });
  }

}
