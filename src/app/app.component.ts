import {Component, OnInit} from '@angular/core';
import {CycleService} from './services/cycle.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Arlo';

  constructor() {}

  ngOnInit(): void {

  }
}
