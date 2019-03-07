import { Component, OnInit } from '@angular/core';
import {Recap} from '../types/recap';
import {RecapService} from '../services/recap.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';
import {TransactionService} from '../services/transaction.service';
import {TransactionsComponent} from '../transactions/transactions.component';
import {CycleService} from '../services/cycle.service';


@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})


export class RecapComponent implements OnInit {

  dataSource: Recap[] = [];
  cycle: string;
  displayedColumns: string[] = ['name', 'spent', 'remaining', 'over'];

  constructor(private recapService: RecapService,
              private refreshService: RefreshTransactionsService,
              private cycleService: CycleService) { }

  ngOnInit() {
    this.cycleService.currentCycle.subscribe(cycle => this.cycle = cycle);
    this.getRecap();
    this.refreshService.refreshed.subscribe( () => {
      this.getRecap();
    });
    this.cycleService.currentCycle.subscribe( () => {
      this.getRecap();
    });
  }

  private getRecap(): void {
    this.recapService.getRecap(this.cycle).subscribe(recap => this.dataSource = recap);
  }

  private getTotalSpent(): number {
    return this.dataSource.map(t => t.spent).reduce((acc, value) => acc + value, 0);
  }
  private getTotalRemaining(): number {
    return this.dataSource.map(t => t.remaining).reduce((acc, value) => acc + value, 0);
  }
  private getTotalOver(): number {
    return this.dataSource.map(t => t.over).reduce((acc, value) => acc + value, 0);
  }
}
