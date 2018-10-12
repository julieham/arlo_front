import { Component, OnInit } from '@angular/core';
import {Recap} from '../types/recap';
import {RecapService} from '../services/recap.service';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  recap: Recap[];

  constructor(private recapService: RecapService) { }

  ngOnInit() {
    this.getRecap();
  }

  private getRecap(): void {
    this.recapService.getRecap().subscribe(recap => this.recap = recap);
  }

}
