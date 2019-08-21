import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AmountItem, Transfer} from '../types/accounts';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountsInfosService {

  private getBankAmountsURL = PROTOCOL + '://' + SERVER_IP + ':5000/amounts/bank?cycle=';
  private getCycleAmountsURL = PROTOCOL + '://' + SERVER_IP + ':5000/amounts/cycle?cycle=';
  private getTransfersURL = PROTOCOL + '://' + SERVER_IP + ':5000/transfers?cycle=';
  private getBudgetsURL = PROTOCOL + '://' + SERVER_IP + ':5000/list/budgets?cycle=';

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
