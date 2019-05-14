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

  private json_charts = [{
    name: 'spent',
    data: [1199, 100, 4, 38, 62, 66, 28, 39, 38, 29, 111]
  }, {
    name: 'remaining',
    data: [33, 88, 29, 0, 0, 22, 93, 0, 0, 11, 23]
  }, {
    name: 'over',
    data: [0, 0, 0, 0, 59, 0, 0, 0, 1, 0, 0]
  }];

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
        stacking: 'percent'
      }
    },
    series: this.json_charts
  };

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
