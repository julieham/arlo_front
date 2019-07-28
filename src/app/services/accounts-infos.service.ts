import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {AmountItem} from '../types/accounts';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountsInfosService {

  private getBankAmountsURL = 'http://localhost:5000/amounts/bank?cycle=';
  private getCycleAmountsURL = 'http://localhost:5000/amounts/cycle?cycle=';

  constructor(private http: HttpClient) { }

  getBankAmounts(cycle: string): Observable<AmountItem[]> {
    return this.http.get<AmountItem[]>(this.getBankAmountsURL + cycle, httpOptions);
  }

  getCycleAmounts(cycle: string): Observable<AmountItem[]> {
    return this.http.get<AmountItem[]>(this.getCycleAmountsURL + cycle, httpOptions);
  }
}
