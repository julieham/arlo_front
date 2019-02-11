import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {AccountMetadata} from '../types/accounts';
import {Recap} from '../types/recap';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountsInfosService {

  private getAccountsURL = 'http://localhost:5000/balances?cycle=';

  constructor(private http: HttpClient) { }

  getAccountsInfos(cycle: string): Observable<AccountMetadata[]> {
    return this.http.get<AccountMetadata[]>(this.getAccountsURL + cycle, httpOptions);
  }
}
