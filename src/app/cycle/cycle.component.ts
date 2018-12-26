import { Component, OnInit } from '@angular/core';

import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {

  selectedCycle = 'Dec18';
  cycleControl = new FormControl('');
  cycles: string[] = [
    'Nov18',
    'Dec18',
  ];

  constructor() { }

  ngOnInit() {
  }

}
