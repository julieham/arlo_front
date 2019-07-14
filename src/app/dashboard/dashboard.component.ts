import { Component, OnInit } from '@angular/core';
import {CycleService} from '../services/cycle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cycles: string[];
  activeCycle: string;

  constructor(private cycleService: CycleService) { }

  ngOnInit() {
    this.cycleService.getAllCycle().subscribe( cycles => {
      this.cycles = cycles.all_cycles;
      this.activeCycle = cycles.current_cycle;
    });
  }

}
