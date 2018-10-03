import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RefreshTransactionsService {

  private listURL = 'http://localhost:5000/refresh';

  constructor(private http: HttpClient) {
  }

  refreshTransactions(): Observable<Object> {
    return this.http.get(this.listURL, httpOptions);
  }
}
