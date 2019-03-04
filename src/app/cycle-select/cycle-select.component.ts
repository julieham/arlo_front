import { Component, OnInit } from '@angular/core';
import {CycleService} from '../services/cycle.service';

@Component({
  selector: 'app-cycle-select',
  templateUrl: './cycle-select.component.html',
  styleUrls: ['./cycle-select.component.css']
})

export class CycleSelectComponent implements OnInit {

  cycles: string[];
  cycle: string;

  constructor(private cycleService: CycleService) { }

  ngOnInit() {
    this.cycleService.getAllCycle().subscribe( cycles => this.cycles = cycles);
  }

  private changeCycle(cycle: string): void {
    this.cycle = cycle;
    this.cycleService.changeCycle(cycle);
  }
}
