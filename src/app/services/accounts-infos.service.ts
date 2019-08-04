import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {AmountItem, Transfer} from '../types/accounts';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountsInfosService {

  private getBankAmountsURL = 'http://localhost:5000/amounts/bank?cycle=';
  private getCycleAmountsURL = 'http://localhost:5000/amounts/cycle?cycle=';
  private getTransfersURL = 'http://localhost:5000/transfers?cycle=';
  private getBudgetsURL = 'http://localhost:5000/list/budgets?cycle=';

  constructor(private http: HttpClient) { }

  getBankAmounts(cycle: string): Observable<AmountItem[]> {
    return this.http.get<AmountItem[]>(this.getBankAmountsURL + cycle, httpOptions);
  }

  getCycleAmounts(cycle: string): Observable<AmountItem[]> {
    return this.http.get<AmountItem[]>(this.getCycleAmountsURL + cycle, httpOptions);
  }

  getEndOfCycleTransfer(cycle: string): Observable<Transfer[]> {
    return this.http.get<Transfer[]>(this.getTransfersURL + cycle, httpOptions);
  }

  getBudgets(cycle: string): Observable<AmountItem[]> {
    return this.http.get<AmountItem[]>(this.getBudgetsURL + cycle, httpOptions);
  }
}
