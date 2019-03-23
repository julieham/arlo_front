import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {CycleService} from '../services/cycle.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  private cycle;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cycleService: CycleService) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.cycle = this.route.snapshot.paramMap.get('cycle');
        this.cycleService.changeCycle(this.cycle);
      }
    });
  }

}
