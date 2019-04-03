import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

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

  private createTransactionURL = 'http://localhost:5000/create/manual';
  private listAccountsURL = 'http://localhost:5000/list/account';
  private createRecurringTransactionURL = 'http://localhost:5000/create/recurring';
  private getRecurringTransactionsURL = 'http://localhost:5000/list/recurring';

  constructor(private http: HttpClient) { }

  createTransaction(formValues: Object): Observable<Object> {
    return this.http.post(this.createTransactionURL, formValues, httpOptions).pipe(
      tap(() => this.created.emit() )
    );
  }

  getAllAccounts(): Observable<string[]> {
    return this.http.get<string[]>(this.listAccountsURL, httpOptions);
  }

  createRecurringTransaction(name: string): Observable<Object> {
    // TODO jolifier le json
    const rec = new RecurringTransaction(name);
    console.log(rec);
    return this.http.post(this.createRecurringTransactionURL, new RecurringTransaction(name), httpOptions).pipe(
      tap(_ => this.created.emit())
    );
  }

  getPossibleRecurringTransactions(): Observable<string[]> {
    return this.http.get<string[]>(this.getRecurringTransactionsURL, httpOptions);
  }
}
