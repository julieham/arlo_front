import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {Accounts} from '../types/accounts';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountsInfosService {

  private getAccountsURL = 'http://localhost:5000/balances?cycle=';

  constructor(private http: HttpClient) { }

  getAccountsInfos(cycle: string): Observable<Accounts[]> {
    return this.http.get<Accounts[]>(this.getAccountsURL + cycle, httpOptions);
  }
}
