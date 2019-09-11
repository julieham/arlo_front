import {Component, OnInit} from '@angular/core';
import {CycleService} from './services/cycle.service';
import {DeviceService} from './services/device.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Arlo';
  cycles = [];
  activeCycle = 'now';
  isMobile = false;

  constructor(private cycleService: CycleService,
              private deviceService: DeviceService) {
  }

  ngOnInit(): void {
    this.cycleService.getAllCycle().subscribe(cycles => {
      this.cycles = cycles.all_cycles;
      this.activeCycle = cycles.current_cycle;
      console.log('app component');
      console.log(cycles);
    });
    this.isMobile = this.deviceService.getIsMobileResolution();
  }

  setCycle(cycle: string) {
    this.cycleService.changeCycle(cycle);
    this.activeCycle = cycle;
  }
}
