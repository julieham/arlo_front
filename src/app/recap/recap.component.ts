import {Component, OnInit} from '@angular/core';
import {Recap} from '../types/recap';
import {RecapService} from '../services/recap.service';
import {TransactionService} from '../services/transaction.service';
import {category_icons} from '../types/transaction';
import {CycleService} from '../services/cycle.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.scss']
})

export class RecapComponent implements OnInit {

  cycle_progress = 100;

  dataSource: Recap[] = [];
  icons = category_icons;

  constructor(private recapService: RecapService,
              private transactionsService: TransactionService,
              private cycleService: CycleService) {
  }

  ngOnInit() {
    this.transactionsService.transactionsChanged.subscribe(cycle => this.getRecap(cycle));
  }

  private getRecap(cycle: string): void {
    this.recapService.getRecap(cycle).subscribe(recap => {
      this.dataSource = recap;
    });
    this.cycleService.getProgress(cycle).subscribe(progress => this.cycle_progress = progress);
  }

  onCategoryClick(category: string): void {
    this.transactionsService.categoryClick.emit(category);
  }

  private progress_bar_class(category: Recap): string {
    if (category.delta_days > 3) {
      return 'progress-bar-danger';
    }
    if (category.delta_days < -1) {
      return 'progress-bar-success';
    }
    if (category.delta_days > 1) {
      return 'progress-bar-warning';
    }
    return 'progress-bar-info';
  }
}

