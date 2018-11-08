import { Component, OnInit } from '@angular/core';
import {Recap} from '../types/recap';
import {RecapService} from '../services/recap.service';
import {RefreshTransactionsService} from '../services/refresh-transactions.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  recap: Recap[];

  constructor(private recapService: RecapService,
              private refreshService: RefreshTransactionsService) { }

  ngOnInit() {
    this.getRecap();
    this.refreshService.refreshed.subscribe( () => {
      this.getRecap();
    });
  }

  private getRecap(): void {
    this.recapService.getRecap().subscribe(recap => this.recap = recap);
  }

}
