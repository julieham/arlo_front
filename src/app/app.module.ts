import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {  MatDatepickerModule,
          MatNativeDateModule,
          MatFormFieldModule,
          MatInputModule,
          MatRadioModule,
          MatSelectModule,
          MatButtonModule,
          MatTableModule,
          MatCheckboxModule,
          MatSlideToggleModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SetFieldsComponent } from './set-fields/set-fields.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { RefreshTransactionsComponent } from './refresh-transactions/refresh-transactions.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { AccountsInfosComponent } from './accounts-infos/accounts-infos.component';
import { RecapComponent } from './recap/recap.component';
import { CycleSelectComponent } from './cycle-select/cycle-select.component';
import { RecurringTransactionsComponent } from './recurring-transactions/recurring-transactions.component';
import { CreatorComponent } from './creator/creator.component';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    SetFieldsComponent,
    RefreshTransactionsComponent,
    CreateTransactionComponent,
    AccountsInfosComponent,
    RecapComponent,
    CycleSelectComponent,
    RecurringTransactionsComponent,
    CreatorComponent,
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
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    CreateTransactionComponent
  ]
})
export class AppModule { }
