import {Component, OnInit} from '@angular/core';
import {CycleService} from './services/cycle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cycles: string[];
  activeCycle: string;
  title = 'Arlo';

  constructor(private cycleService: CycleService) {}

  ngOnInit(): void {
    this.cycleService.getAllCycle().subscribe( cycles => {
      this.cycles = cycles.all_cycles;
      this.activeCycle = cycles.current_cycle;
    });
  }
}
