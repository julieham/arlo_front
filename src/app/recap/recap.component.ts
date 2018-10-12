import { Component, OnInit } from '@angular/core';
import {Recap} from '../types/recap';

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  a: Recap = new Recap('prout', 827, '8178');
  b: Recap = new Recap('caca', 78, '670');

  recap: Recap[] = [this.a, this.b];

  constructor() { }

  ngOnInit() {
  }
}
