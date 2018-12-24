import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {

  cycle = 'Dec18';

  constructor() { }

  ngOnInit() {
  }

}
