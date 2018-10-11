import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balances',
  templateUrl: './balances.component.html',
  styleUrls: ['./balances.component.css']
})
export class BalancesComponent implements OnInit {

  balances: { [account: string]: number } = {
    'Julie': 728,
    'Thomus': 9,
    'Cash': 34
  };

  constructor() { }

  ngOnInit() {
  }

}
