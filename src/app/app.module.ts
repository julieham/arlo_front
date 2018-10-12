import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { SetCategoryComponent } from './set-category/set-category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { RefreshTransactionsComponent } from './refresh-transactions/refresh-transactions.component';
import { CreateTransactionComponent } from './create-transaction/create-transaction.component';
import { AccountsInfosComponent } from './accouts-infos/accounts-infos.component';
import { RecapComponent } from './recap/recap.component';
library.add(fas);

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    SetCategoryComponent,
    RefreshTransactionsComponent,
    CreateTransactionComponent,
    AccountsInfosComponent,
    RecapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
