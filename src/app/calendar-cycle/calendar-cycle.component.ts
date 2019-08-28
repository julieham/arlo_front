import {OnInit} from '@angular/core';
import {CycleService} from '../services/cycle.service';
import {Month} from '../types/accounts';

export abstract class CalendarCycleComponent implements OnInit {

  calendar: Month[];
  selected_dates: string[] = [];
  cycles: string[];
  destination_cycle: string;
  colors = ['#4169E1', '#B22222', '#228B22', '#FFB6C1',
    '#87CEEB', '#FFD700', '#FFA500', '#663399',
    '#8B4513', '#32CD32', '#000080', '#778899'];

  constructor(private cycleService: CycleService) {
  }

  isSunday(date: string) {
    return new Date(date).getDay() === 0;
  }

  isSelected(date: string) {
    return this.selected_dates.includes(date);
  }

  make_color(color: number) {
    return this.colors[color];
  }

  refreshCalendar(): void {
    this.cycleService.getCycleCalendar().subscribe(calendar => {
      this.calendar = calendar;
      this.selected_dates = [];
      this.destination_cycle = undefined;
    });
  }

  ngOnInit() {
    this.refreshCalendar();
    this.cycleService.calendarModified.subscribe(() => {
      this.refreshCalendar();
    });
  }

  toggle_select_date(date, cycle): void {
    if (this.selected_dates.includes(date)) {
      this.selected_dates.splice(this.selected_dates.indexOf(date), 1);
      if (this.selected_dates.length === 0) {
        this.reset_cycles();
      }
    } else {
      if (this.selected_dates.length === 0) {
        this.get_cycles(cycle);
      }
      this.selected_dates.push(date);
    }
  }

  private reset_cycles(): void {
    this.cycles = [];
  }

  private get_cycles(cycle): void {
    this.cycleService.getLocalCycle(cycle, true).subscribe(
      cycles => this.cycles = cycles);
  }

  setSelectedCycle(cycle): void {
    this.destination_cycle = cycle;
  }

  submitEdit(cycle: string): void {
    this.cycleService.editCalendar(this.selected_dates, cycle);
  }
}
