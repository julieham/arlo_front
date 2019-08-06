import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-cycle-selector',
  templateUrl: './cycle-selector.component.html',
  styleUrls: ['./cycle-selector.component.css']
})
export class CycleSelectorComponent implements OnInit {

  my_cycle: string;

  @Input() cycles: string[];
  @Input() placeholder: string;
  @Input() display_hint_linked: boolean;

  @Output() selected_cycle: EventEmitter<string> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  private setSelectedCycle(): void {
    this.selected_cycle.emit(this.my_cycle);
  }

}
