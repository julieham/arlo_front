import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
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

import {AppComponent} from './app.component';
import {TransactionsComponent} from './transactions/transactions.component';
import {SetFieldsComponent} from './set-fields/set-fields.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {RefreshTransactionsComponent} from './refresh-transactions/refresh-transactions.component';
import {CreateTransactionComponent} from './create-transaction/create-transaction.component';
import {AccountsComponent} from './accounts/accounts.component';
import {RecapComponent} from './recap/recap.component';
import {RecurringTransactionsComponent} from './recurring-transactions/recurring-transactions.component';
import {CreatorComponent} from './creator/creator.component';
import {ReferenceNameMakerComponent} from './reference-name-maker/reference-name-maker.component';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {EditTransactionComponent} from './edit-transaction/edit-transaction.component';
import {SplitTransactionComponent} from './split-transaction/split-transaction.component';
import {LowerBoundDirective} from './validators/directives/lower-bound.directive';
import {UpperBoundDirective} from './validators/directives/upper-bound.directive';
import {DeleteConfirmComponent} from './delete-confirm/delete-confirm.component';
import {HighchartsChartModule} from 'highcharts-angular';
import {CreateDepositComponent} from './create-deposit/create-deposit.component';
import {AmountListComponent} from './amount-list/amount-list.component';
import {DepositOverviewComponent} from './deposit-overview/deposit-overview.component';
import {SingleTransactionComponent} from './single-transaction/single-transaction.component';
import {TransactionMenuComponent} from './transaction-menu/transaction-menu.component';

library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    SetFieldsComponent,
    RefreshTransactionsComponent,
    CreateTransactionComponent,
    AccountsComponent,
    RecapComponent,
    RecurringTransactionsComponent,
    CreatorComponent,
    ReferenceNameMakerComponent,
    DashboardComponent,
    EditTransactionComponent,
    SplitTransactionComponent,
    LowerBoundDirective,
    UpperBoundDirective,
    DeleteConfirmComponent,
    CreateDepositComponent,
    AmountListComponent,
    DepositOverviewComponent,
    SingleTransactionComponent,
    TransactionMenuComponent,
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
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateTransactionComponent,
    ReferenceNameMakerComponent,
    EditTransactionComponent,
    SplitTransactionComponent,
    DeleteConfirmComponent,
    RecurringTransactionsComponent,
    CreateDepositComponent
  ]
})
export class AppModule { }
