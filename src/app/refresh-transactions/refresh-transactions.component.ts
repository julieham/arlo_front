import {Component, OnInit} from '@angular/core';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';

@Component({
  selector: 'app-fetch-transactions',
  templateUrl: './refresh-transactions.component.html',
  styleUrls: ['./refresh-transactions.component.css']
})
export class RefreshTransactionsComponent implements OnInit {

  active: boolean;

  constructor(private refreshTransactionsService: RefreshTransactionsService) {
    this.active = true;
  }

  ngOnInit() {
    this.refreshTransactionsService.refreshed.subscribe(() => this.active = true);
  }

  onClick() {
    this.active = false;
    this.refreshTransactionsService.refreshTransactions().subscribe();
  }
}
