import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterEvent} from '@angular/router';
import {CycleService} from '../services/cycle.service';

@Component({
  selector: 'app-dashboard-content',
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.css']
})

export class DashboardContentComponent implements OnInit {

  private cycle;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cycleService: CycleService) { }

  ngOnInit() {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event instanceof NavigationEnd) {
        this.cycle = this.route.snapshot.paramMap.get('cycle');
        this.cycleService.changeCycle(this.cycle);
      }
    });
  }

}
