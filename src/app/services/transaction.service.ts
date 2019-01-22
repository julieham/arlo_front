import {EventEmitter, Injectable, Output} from '@angular/core';
import { Transaction } from '../types/transaction';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryBinding} from './set-category.service';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private listURL = 'http://localhost:5000/list?cycle=';

  constructor(private http: HttpClient) { }

  getTransactions(cycle: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.listURL + cycle, httpOptions);
  }
}
