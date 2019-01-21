import { Injectable } from '@angular/core';
import { Transaction } from '../types/transaction';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CategoryBinding} from './set-category.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private listURL = 'http://localhost:5000/list?cycle=Jan19';

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.listURL, httpOptions);
  }
}
