import {Component, Input, OnInit} from '@angular/core';
import {AmountItem} from '../types/accounts';

@Component({
  selector: 'app-amount-list',
  templateUrl: './amount-list.component.html',
  styleUrls: ['./amount-list.component.css']
})
export class AmountListComponent implements OnInit {

  @Input() items: AmountItem[];
  @Input() display_total: boolean;

  constructor() {
  }

  ngOnInit() {
  }

  private get_total(): number {
    return this.items.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }

}
