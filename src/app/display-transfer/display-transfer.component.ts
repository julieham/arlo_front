import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AccountsInfosService} from '../services/accounts-infos.service';
import {Transfer} from '../types/accounts';
import {CycleService} from '../services/cycle.service';

@Component({
  selector: 'app-display-transfer',
  templateUrl: './display-transfer.component.html',
  styleUrls: ['./display-transfer.component.css']
})
export class DisplayTransferComponent implements OnInit {

  private transfers: Transfer[];
  private cycle = 'now';

  constructor(private transferService: AccountsInfosService,
              private cycleService: CycleService,
              private dialogRef: MatDialogRef<DisplayTransferComponent>) {
  }

  ngOnInit() {
    this.cycleService.currentCycle.subscribe(cycle => this.cycle = cycle);
    this.transferService.getEndOfCycleTransfer(this.cycle).subscribe(transfers => {
      this.transfers = transfers;
    });
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
