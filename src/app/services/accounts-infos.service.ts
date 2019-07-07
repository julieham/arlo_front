import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {Accounts, AmountItem} from '../types/accounts';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountsInfosService {

  private getAccountsURL = 'http://localhost:5000/balances?cycle=';
  private getBankAmountsURL = 'http://localhost:5000/amounts/bank?cycle=';
  private getCycleAmountsURL = 'http://localhost:5000/amounts/cycle?cycle=';

  constructor(private http: HttpClient) { }

  getAccountsInfos(cycle: string): Observable<Accounts[]> {
    return this.http.get<Accounts[]>(this.getAccountsURL + cycle, httpOptions);
  }

  getBankAmounts(cycle: string): Observable<AmountItem[]> {
    return this.http.get<AmountItem[]>(this.getBankAmountsURL + cycle, httpOptions);
  }

  getCycleAmounts(cycle: string): Observable<AmountItem[]> {
    return this.http.get<AmountItem[]>(this.getCycleAmountsURL + cycle, httpOptions);
  }
}
