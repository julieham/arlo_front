import {NgModule} from '@angular/core';
import {Router, RouterModule, Routes} from '@angular/router';
import {CreateBudgetComponent} from './create-budget/create-budget.component';
import {FilterTransactionsComponent} from './filter-transactions/filter-transactions.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth.guard';
import {DepositOverviewDesktopComponent} from './deposit-overview/deposit-overview.desktop.component';
import {DepositOverviewMobileComponent} from './deposit-overview/deposit-overview.mobile.component';
import {DeviceService} from './services/device.service';

const desktop_routes: Routes = [
  { path: '', redirectTo: '/dashboard/now', pathMatch: 'full'},
  {path: 'budget', component: CreateBudgetComponent, canActivate: [AuthGuard]},
  {path: 'filter', component: FilterTransactionsComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/:cycle', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'deposit', component: DepositOverviewDesktopComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

const mobile_routes: Routes = [
  {path: '', redirectTo: '/dashboard/now', pathMatch: 'full'},
  {path: 'budget', component: CreateBudgetComponent, canActivate: [AuthGuard]},
  {path: 'filter', component: FilterTransactionsComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/:cycle', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'deposit', component: DepositOverviewMobileComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
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
