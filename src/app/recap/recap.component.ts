import { Component, OnInit } from '@angular/core';
import {Recap} from '../types/recap';
import {RecapService} from '../services/recap.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';
import {CycleService} from '../services/cycle.service';

export interface RecapData {
  name: string;
  euros_spent: number;
  budget: number;
  progress: number;
}

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})


export class RecapComponent implements OnInit {

  dataSource: Recap[] = [new Recap('caca', 45, 100), new Recap('prout', 50, 50), new Recap('pipi', 0, 66)];
  cycle: string;
  displayedColumns: string[] = ['name', 'euros_spent', 'euros_remaining'];



  constructor(private recapService: RecapService,
              private refreshService: RefreshTransactionsService,
              private cycleService: CycleService) { }

  ngOnInit() {
    this.cycleService.currentCycle.subscribe(cycle => this.cycle = cycle);
    // this.getRecap();
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
