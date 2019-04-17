import {Component, OnInit} from '@angular/core';
import {Recap} from '../types/recap';
import {RecapService} from '../services/recap.service';
import {TransactionService} from '../services/transaction.service';
import {category_icons} from '../types/transaction';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})


export class RecapComponent implements OnInit {

  highcharts = Highcharts;

  dataSource: Recap[] = [];
  displayedColumns: string[] = ['name', 'spent', 'remaining', 'over'];
  icons = category_icons;
  chartOptions = {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Recap'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Total fruit consumption'
      }
    },
    legend: {
      reversed: true
    },
    plotOptions: {
      series: {
        stacking: 'normal'
      }
    },
    series: [{
      name: 'John',
      data: [5, 3, 4, 7, 2]
    }, {
      name: 'Jane',
      data: [2, 2, 3, 2, 1]
    }, {
      name: 'Joe',
      data: [3, 4, 4, 2, 5]
    }]
  };
  private json = [{'category': 'Bills', 'spent': 1199.19, 'remaining': 118800.81, 'over': 0.0},
    {'category': 'Fine Food', 'spent': 100.0, 'remaining': 9900.0, 'over': 0.0},
    {'category': 'Food', 'spent': 564.28, 'remaining': 49435.72, 'over': 0.0},
    {'category': 'Fun', 'spent': 265.0, 'remaining': 6735.0, 'over': 0.0},
    {'category': 'Home', 'spent': 116.48, 'remaining': 9883.52, 'over': 0.0},
    {'category': 'Laundry', 'spent': 51.0, 'remaining': 4449.0, 'over': 0.0},
    {'category': 'Restaurants', 'spent': 517.96, 'remaining': 45482.04, 'over': 0.0},
    {'category': 'Shopping', 'spent': 57.9, 'remaining': 5942.1, 'over': 0.0},
    {'category': 'Snacks', 'spent': 189.0, 'remaining': 14811.0, 'over': 0.0},
    {'category': 'Transports', 'spent': 139.89, 'remaining': 13760.11, 'over': 0.0},
    {'category': 'Deposit', 'spent': 0.0, 'remaining': 25500.0, 'over': 0.0}];

  constructor(private recapService: RecapService,
              private transactionsService: TransactionService) { }

  ngOnInit() {
    this.transactionsService.transactionsChanged.subscribe(cycle => this.getRecap(cycle));
  }

  private getRecap(cycle: string): void {
    this.recapService.getRecap(cycle).subscribe(recap => {
      this.dataSource = recap;
    });
  }

  private getTotalSpent(): number {
    return this.dataSource.map(t => t.spent).reduce((acc, value) => acc + value, 0);
  }
  private getTotalRemaining(): number {
    return this.dataSource.map(t => t.remaining).reduce((acc, value) => acc + value, 0);
  }
  private getTotalOver(): number {
    return this.dataSource.map(t => t.over).reduce((acc, value) => acc + value, 0);
  }

  onCategoryClick(category: string): void {
    this.transactionsService.categoryClick.emit(category);
  }
}
