import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DepositOverviewComponent} from './deposit-overview/deposit-overview.component';
import {CreateBudgetComponent} from './create-budget/create-budget.component';
import {FilterTransactionsComponent} from './filter-transactions/filter-transactions.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard/now', pathMatch: 'full'},
  {path: 'dashboard/:cycle', component: DashboardComponent},
  {path: 'deposit', component: DepositOverviewComponent},
  {path: 'budget', component: CreateBudgetComponent},
  {path: 'filter', component: FilterTransactionsComponent}
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
