import {Component} from '@angular/core';
import {DashboardComponent} from './dashboard.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.mobile.component.html',
  styleUrls: ['./dashboard.mobile.component.css']
})
export class DashboardMobileComponent extends DashboardComponent {

  tabs = ['Transactions', 'Recap', 'Balances'];
  activeTab = this.tabs[1];

}
