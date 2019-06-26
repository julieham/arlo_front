import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DepositState, RecurringDeposit} from '../types/deposit';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class DepositService {

  private listRecurringDepositUrl = 'http://localhost:5000/list/recurring_deposit';
  private listDepositNamesUrl = 'http://localhost:5000/list/deposit';
  private createDepositUrl = 'http://localhost:5000/create/deposit';
  private setDebitDepositUrl = 'http://localhost:5000/create/deposit_debit?id=';
  private depositStateUrl = 'http://localhost:5000/deposit';

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
    return this.http.post(this.setDebitDepositUrl + id + '&deposit=' + deposit_name, httpOptions);
  }

  getStateDeposit(): Observable<DepositState[]> {
    return this.http.get<DepositState[]>(this.depositStateUrl, httpOptions);
  }
}
