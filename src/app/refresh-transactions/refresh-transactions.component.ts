import { Component, OnInit } from '@angular/core';
import {SetCategoryService} from '../services/set-category.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';

@Component({
  selector: 'app-fetch-transactions',
  templateUrl: './refresh-transactions.component.html',
  styleUrls: ['./refresh-transactions.component.css']
})
export class RefreshTransactionsComponent implements OnInit {

  constructor(private refreshTransactionsService: RefreshTransactionsService) { }

  ngOnInit() {
  }

  onClick() {
    this.refreshTransactionsService.refreshTransactions().subscribe();
  }
}
