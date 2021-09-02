import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {CreateBudgetComponent} from './create-budget/create-budget.component';
import {FilterTransactionsComponent} from './filter-transactions/filter-transactions.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {DepositOverviewDesktopComponent} from './deposit-overview/deposit-overview.desktop.component';
import {DepositOverviewMobileComponent} from './deposit-overview/deposit-overview.mobile.component';
import {DeviceService} from './services/device.service';
import {CalendarCycleMobileComponent} from './calendar-cycle/calendar-cycle.mobile.component';
import {CalendarCycleDesktopComponent} from './calendar-cycle/calendar-cycle.desktop.component';
import {DashboardMobileComponent} from './dashboard/dashboard.mobile.component';
import {DashboardDesktopComponent} from './dashboard/dashboard.desktop.component';
import {ClassbotDashboardDesktopComponent} from './classbot/classbot-dashboard.desktop.component';
import {ClassbotDashboardMobileComponent} from './classbot/classbot-dashboard.mobile.component';

const desktop_routes: Routes = [
  {path: '', redirectTo: '/dashboard/now', pathMatch: 'full'},
  {path: 'budget', component: CreateBudgetComponent, canActivate: [AuthGuard]},
  {path: 'filter', component: FilterTransactionsComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/:cycle', component: DashboardDesktopComponent, canActivate: [AuthGuard]},
  {path: 'deposit', component: DepositOverviewDesktopComponent, canActivate: [AuthGuard]},
  {path: 'calendar', component: CalendarCycleDesktopComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'classbot', component: ClassbotDashboardDesktopComponent, canActivate: [AuthGuard]}
];

const mobile_routes: Routes = [
  {path: '', redirectTo: '/dashboard/now', pathMatch: 'full'},
  {path: 'budget', component: CreateBudgetComponent, canActivate: [AuthGuard]},
  {path: 'filter', component: FilterTransactionsComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/:cycle', component: DashboardMobileComponent, canActivate: [AuthGuard]},
  {path: 'deposit', component: DepositOverviewMobileComponent, canActivate: [AuthGuard]},
  {path: 'calendar', component: CalendarCycleMobileComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'classbot', component: ClassbotDashboardMobileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(desktop_routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

  constructor(private router: Router,
              private deviceService: DeviceService) {
    if (deviceService.getIsMobileResolution()) {
      router.resetConfig(mobile_routes);
    }
  }
}
