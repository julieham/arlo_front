import {OnInit} from '@angular/core';
import {CycleService} from '../services/cycle.service';

export abstract class DashboardComponent implements OnInit {

  cycles: string[];
  activeCycle: string;

  constructor(private cycleService: CycleService) { }

  ngOnInit() {
    this.cycleService.getAllCycle().subscribe( cycles => {
      this.cycles = cycles.all_cycles;
      this.activeCycle = cycles.current_cycle;
    });
  }

  switchToCycle(cycle: string) {
    this.activeCycle = cycle;
    this.cycleService.changeCycle(cycle);
  }
}
