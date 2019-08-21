import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class RecurringTransaction {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CreateTransactionService {

  @Output() created: EventEmitter<boolean> = new EventEmitter();

  private createTransactionURL = PROTOCOL + '://' + SERVER_IP + ':5000/create/manual';
  private listAccountsURL = PROTOCOL + '://' + SERVER_IP + ':5000/list/account';
  private createSingleRecurringTransactionURL = PROTOCOL + '://' + SERVER_IP + ':5000/create/recurring/single';
  private createSeveralRecurringTransactionURL = PROTOCOL + '://' + SERVER_IP + ':5000/create/recurring/several';
  private getRecurringTransactionsURL = PROTOCOL + '://' + SERVER_IP + ':5000/list/recurring';

  constructor(private http: HttpClient) { }

  createTransaction(formValues: Object): Observable<Object> {
    return this.http.post(this.createTransactionURL, formValues, httpOptions).pipe(
      tap(() => this.created.emit() )
    );
  }

  getAllAccounts(): Observable<string[]> {
    return this.http.get<string[]>(this.listAccountsURL, httpOptions);
  }

  createSingleRecurringTransaction(name: string): Observable<Object> {
    return this.http.post(this.createSingleRecurringTransactionURL, new RecurringTransaction(name), httpOptions).pipe(
      tap(_ => this.created.emit())
    );
  }

  createSeveralRecurringTransaction(how_many_recurring: Object): Observable<Object> {
    return this.http.post(this.createSeveralRecurringTransactionURL, how_many_recurring, httpOptions).pipe(
      tap(_ => this.created.emit())
    );
  }

  getPossibleRecurringTransactions(): Observable<string[]> {
    return this.http.get<string[]>(this.getRecurringTransactionsURL, httpOptions);
  }
}
