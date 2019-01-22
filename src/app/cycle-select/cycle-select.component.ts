import { Component, OnInit } from '@angular/core';
import {CycleService} from '../services/cycle.service';

@Component({
  selector: 'app-cycle-select',
  templateUrl: './cycle-select.component.html',
  styleUrls: ['./cycle-select.component.css']
})
export class CycleSelectComponent implements OnInit {

  cycles = ['Jan19', 'Dec18', 'NY18'];
  cycle = 'Jan19';

  constructor(private cycleService: CycleService) { }

  ngOnInit() {
  }

  private changeCycle(cycle: string): void {
    this.cycle = cycle;
    this.cycleService.changeCycle(cycle);
  }
}
