import {Component, OnInit} from '@angular/core';
import {Recap} from '../types/recap';
import {RecapService} from '../services/recap.service';
import {TransactionService} from '../services/transaction.service';
import {category_icons} from '../types/transaction';


@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})


export class RecapComponent implements OnInit {

  dataSource: Recap[] = [];
  displayedColumns: string[] = ['name', 'spent', 'remaining', 'over'];
  icons = category_icons;

  constructor(private recapService: RecapService,
              private transactionsService: TransactionService) { }

  ngOnInit() {
    this.transactionsService.transactionsChanged.subscribe(cycle => this.getRecap(cycle));
  }

  private getRecap(cycle: string): void {
    this.recapService.getRecap(cycle).subscribe(recap => this.dataSource = recap);
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
}
