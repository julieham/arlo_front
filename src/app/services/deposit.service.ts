import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RecurringDeposit} from '../types/recurring';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};


@Injectable({
  providedIn: 'root'
})
export class DepositService {

  private listRecurringDepositUrl = 'http://localhost:5000/list/recurring_deposit';
  private createDepositUrl = 'http://localhost:5000/create/deposit';

  constructor(private http: HttpClient) {
  }

  getRecurringDeposit(): Observable<RecurringDeposit[]> {
    return this.http.get<RecurringDeposit[]>(this.listRecurringDepositUrl, httpOptions);
  }

  createDepositTransactions(formValues: Object): Observable<Object> {
    return this.http.post(this.createDepositUrl, formValues, httpOptions);
  }
}
