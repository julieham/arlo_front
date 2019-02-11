import { Component, OnInit } from '@angular/core';
import {Recap} from '../types/recap';
import {RecapService} from '../services/recap.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';
import {TransactionService} from '../services/transaction.service';
import {TransactionsComponent} from '../transactions/transactions.component';
import {CycleService} from '../services/cycle.service';

export interface RecapData {
  name: string;
  euros_spent: number;
  budget: number;
  progress: number;
}

const RECAP_DATA: RecapData[] = [
  {name: 'Food', euros_spent: 10, budget: 20, progress: 50},
  {name: 'Bills', euros_spent: 0, budget: 20, progress: 0},
  {name: 'Sports', euros_spent: 20, budget: 20, progress: 100},
];

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})


export class RecapComponent implements OnInit {

  dataSource: Recap[];
  cycle: string;
  // dataSource = RECAP_DATA;
  displayedColumns: string[] = ['name', 'euros_spent', 'euros_remaining'];




  constructor(private recapService: RecapService,
              private refreshService: RefreshTransactionsService,
              private cycleService: CycleService) { }

  ngOnInit() {
    this.cycleService.currentCycle.subscribe(cycle => this.cycle = cycle);
    this.getRecap();
    this.refreshService.refreshed.subscribe( () => {
      this.getRecap();
    });
    this.cycleService.cycleChanged.subscribe( () => {
      this.getRecap();
    });
  }

  private getRecap(): void {
    this.recapService.getRecap(this.cycle).subscribe(recap => this.dataSource = recap);
  }

  private getTotalSpent(): number {
    return this.dataSource.map(t => t.euro_amount).reduce((acc, value) => acc + value, 0);
  }
}
