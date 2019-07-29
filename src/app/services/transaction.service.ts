import {EventEmitter, Injectable, Output} from '@angular/core';
import {Transaction} from '../types/transaction';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  @Output() transactionsChanged: EventEmitter<string> = new EventEmitter();
  @Output() transactionsSplit: EventEmitter<boolean> = new EventEmitter();
  @Output() categoryClick: EventEmitter<string> = new EventEmitter();

  private listURL = 'http://localhost:5000/transactions?cycle=';
  private splitTransactionURL = 'http://localhost:5000/edit/split';
  private transferTransactionURL = 'http://localhost:5000/edit/transfer?id=';
  private deleteURL = 'http://localhost:5000/delete/transaction?id=';

  constructor(private http: HttpClient) { }

  getTransactions(cycle: string): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.listURL + cycle, httpOptions).pipe(
      tap(() => this.transactionsChanged.emit(cycle))
    );
  }

  splitTransaction(formValues: Object): Observable<Object> {
    return this.http.post(this.splitTransactionURL, formValues, httpOptions).pipe(
      tap(() => this.transactionsSplit.emit())
    );
  }

  transferTransaction(id: string, account: string): Observable<Object> {
    return this.http.post(this.transferTransactionURL + id + '&account=' + account, httpOptions).pipe(
      tap(() => this.transactionsChanged.emit())
    );
  }

  delete(transaction: Transaction): Observable<Object> {
    return this.http.post(this.deleteURL + transaction.id + '&type=' + transaction.type, httpOptions).pipe(
      tap(() => this.transactionsChanged.emit())
    );
  }


}
