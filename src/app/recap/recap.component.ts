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
  no_color_categories = ['Bills', 'Deposit', 'Fun', 'Home', 'Shopping', 'Friends', 'Health', 'Apple', 'Fine Food', 'Plane'];

  dataSource: Recap[] = [];
  icons = category_icons;

  constructor(private recapService: RecapService,
              private transactionsService: TransactionService,
              private cycleService: CycleService) {
  }

  ngOnInit() {
    this.transactionsService.transactionsChanged.subscribe(cycle => this.getRecap(cycle));
  }

  setOrganisedRecap(recaps: Recap[]): void {
    let organised_recap = recaps.filter(recap => !this.no_color_categories.includes(recap.category));
    organised_recap = organised_recap.concat(recaps.filter(recap => this.no_color_categories.includes(recap.category)));

    this.dataSource = organised_recap;
    console.log(organised_recap);
  }

  onCategoryClick(category: string): void {
    this.transactionsService.categoryClick.emit(category);
  }

  private getRecap(cycle: string): void {
    this.recapService.getRecap(cycle).subscribe(recap => {
      this.setOrganisedRecap(recap);
    });
    this.cycleService.getProgress(cycle).subscribe(progress => this.cycle_progress = progress);
  }

  private progress_bar_class(category: Recap): string {

    if (this.no_color_categories.includes(category.category)) {
      return 'progress-bar-simple';
    }
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

