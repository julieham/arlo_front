import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DepositOverviewComponent} from './deposit-overview/deposit-overview.component';
import {CreateBudgetComponent} from './create-budget/create-budget.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/now', pathMatch: 'full'},
  {path: 'dashboard/:cycle', component: DashboardComponent},
  {path: 'deposit', component: DepositOverviewComponent},
  {path: 'budget', component: CreateBudgetComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
