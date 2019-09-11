import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {
  MatBadgeModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatRadioModule,
  MatSelectModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatTableModule
} from '@angular/material';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

import {AppComponent} from './app.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {SetFieldsComponent} from './set-fields/set-fields.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {RefreshTransactionsComponent} from './refresh-transactions/refresh-transactions.component';
import {CreateTransactionComponent} from './create-transaction/create-transaction.component';
import {BalancesComponent} from './balances/balances.component';
import {RecapComponent} from './recap/recap.component';
import {RecurringTransactionsComponent} from './recurring-transactions/recurring-transactions.component';
import {CreatorComponent} from './creator/creator.component';
import {ReferenceNameMakerComponent} from './reference-name-maker/reference-name-maker.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardContentComponent} from './dashboard-content/dashboard-content.component';
import {EditTransactionComponent} from './edit-transaction/edit-transaction.component';
import {SplitTransactionComponent} from './split-transaction/split-transaction.component';
import {LowerBoundDirective} from './validators/directives/lower-bound.directive';
import {UpperBoundDirective} from './validators/directives/upper-bound.directive';
import {DeleteConfirmComponent} from './delete-confirm/delete-confirm.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {CreateDepositComponent} from './create-deposit/create-deposit.component';
import {AmountListComponent} from './amount-list/amount-list.component';
import {SingleTransactionComponent} from './single-transaction/single-transaction.component';
import {TransactionMenuComponent} from './transaction-menu/transaction-menu.component';
import {DisplayTransferComponent} from './display-transfer/display-transfer.component';
import {CreateBudgetComponent} from './create-budget/create-budget.component';
import {TransactionsFilterComponent} from './selectors/transactions-filter/transactions-filter.component';
import {ListSelectorComponent} from './selectors/list-selector/list-selector.component';
import {FilterTransactionsComponent} from './filter-transactions/filter-transactions.component';
import {JwtInterceptor} from './interceptors/jwt-interceptor';
import {ErrorInterceptor} from './interceptors/error-interceptor';
import {LoginComponent} from './login/login.component';
import {DepositOverviewMobileComponent} from './deposit-overview/deposit-overview.mobile.component';
import {DepositOverviewDesktopComponent} from './deposit-overview/deposit-overview.desktop.component';
import {CalendarCycleMobileComponent} from './calendar-cycle/calendar-cycle.mobile.component';
import {CalendarCycleDesktopComponent} from './calendar-cycle/calendar-cycle.desktop.component';
import {ReferenceDepositMakerComponent} from './reference-deposit-maker/reference-deposit-maker.component';
import {DashboardDesktopComponent} from './dashboard/dashboard.desktop.component';
import {DashboardMobileComponent} from './dashboard/dashboard.mobile.component';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    SetFieldsComponent,
    RefreshTransactionsComponent,
    CreateTransactionComponent,
    BalancesComponent,
    RecapComponent,
    RecurringTransactionsComponent,
    CreatorComponent,
    ReferenceNameMakerComponent,
    DashboardContentComponent,
    EditTransactionComponent,
    SplitTransactionComponent,
    LowerBoundDirective,
    UpperBoundDirective,
    DeleteConfirmComponent,
    CreateDepositComponent,
    AmountListComponent,
    DepositOverviewMobileComponent,
    DepositOverviewDesktopComponent,
    SingleTransactionComponent,
    TransactionMenuComponent,
    DisplayTransferComponent,
    CreateBudgetComponent,
    ListSelectorComponent,
    TransactionsFilterComponent,
    FilterTransactionsComponent,
    DashboardDesktopComponent,
    DashboardMobileComponent,
    LoginComponent,
    CalendarCycleDesktopComponent,
    CalendarCycleMobileComponent,
    ReferenceDepositMakerComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatExpansionModule,
    MatDialogModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    AppRoutingModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    HighchartsChartModule,
    MatSliderModule,
    MatBadgeModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatSidenavModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateTransactionComponent,
    ReferenceNameMakerComponent,
    EditTransactionComponent,
    SplitTransactionComponent,
    DeleteConfirmComponent,
    RecurringTransactionsComponent,
    CreateDepositComponent,
    DisplayTransferComponent,
    DepositOverviewMobileComponent,
    CalendarCycleMobileComponent,
    DashboardMobileComponent,
    ReferenceDepositMakerComponent
  ]
})
export class AppModule { }
