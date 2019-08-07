import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RecurringDeposit} from '../types/deposit';
import {AmountItem} from '../types/accounts';
import {Transaction} from '../types/transaction';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class DepositService {

  @Output() depositChanged: EventEmitter<string> = new EventEmitter();
  private listRecurringDepositUrl = 'http://localhost:5000/list/recurring_deposit';
  private listDepositNamesUrl = 'http://localhost:5000/list/deposit';
  private createDepositUrl = 'http://localhost:5000/create/deposit';
  private setDebitDepositUrl = 'http://localhost:5000/create/deposit_debit?id=';
  private amountsDepositUrl = 'http://localhost:5000/amounts/deposit';
  private transactionsDepositUrl = 'http://localhost:5000/transactions/deposit';

  constructor(private http: HttpClient) {
  }

  getRecurringDeposit(): Observable<RecurringDeposit[]> {
    return this.http.get<RecurringDeposit[]>(this.listRecurringDepositUrl, httpOptions);
  }

  createDepositTransactions(formValues: Object): Observable<Object> {
    return this.http.post(this.createDepositUrl, formValues, httpOptions);
  }

  getDepositNames(): Observable<string[]> {
    return this.http.get<string[]>(this.listDepositNamesUrl, httpOptions);
  }

  setDebitDeposit(id: string, deposit_name: string): Observable<Object> {
    return this.http.post(this.setDebitDepositUrl + id + '&deposit=' + deposit_name, httpOptions).pipe(
      tap(() => this.depositChanged.emit())
    );
  }

  getAmountsDeposit(): Observable<AmountItem[]> {
    return this.http.get<AmountItem[]>(this.amountsDepositUrl, httpOptions);
  }

  getTransactionsDeposit(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.transactionsDepositUrl, httpOptions);
  }
}
