import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction} from '../types/transaction';
import {AccountMetadata} from '../types/accounts';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AccountsInfosService {

  private getAccountsMetadaURL = 'http://localhost:5000/balances';

  constructor(private http: HttpClient) { }

  getAccountsInfos(): Observable<AccountMetadata[]> {
    return this.http.get<AccountMetadata[]>(this.getAccountsMetadaURL, httpOptions);
  }
}
