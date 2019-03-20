import { Component, OnInit, ViewChild } from '@angular/core';
import {CycleService} from '../services/cycle.service';
import {MatTabGroup} from '@angular/material';
import {TransactionService} from '../services/transaction.service';

// @ts-ignore
@Component({
  selector: 'app-cycle-select',
  templateUrl: './cycle-select.component.html',
  styleUrls: ['./cycle-select.component.css']
})


export class CycleSelectComponent implements OnInit {

  @ViewChild(MatTabGroup) tabGroup: MatTabGroup;



  cycles: string[];
  cycle: string;

  constructor(private cycleService: CycleService,
              private transactionsService: TransactionService) { }

  ngOnInit() {
    this.cycleService.getAllCycle().subscribe( cycles => {
      this.cycles = cycles;
      this.tabGroup.selectedIndex = 3;
    });
  }

  // private changeCycle(cycle: string): void {
  //   this.cycle = cycle;
  //   this.cycleService.changeCycle(cycle);
  // }

  private changeCycle(): void {
    // this.transactionsService.getTransactions();
  }
}

