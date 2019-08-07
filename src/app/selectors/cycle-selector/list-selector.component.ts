import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-list-selector',
  templateUrl: './list-selector.component.html',
  styleUrls: ['./list-selector.component.css']
})
export class ListSelectorComponent implements OnInit {

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
