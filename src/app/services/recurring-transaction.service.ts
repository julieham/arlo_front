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
export class RecurringTransactionService {

  @Output() created: EventEmitter<boolean> = new EventEmitter();

  private createRecurringTransactionURL = 'http://localhost:5000/create/recurring';
  private getRecurringTransactionsURL = 'http://localhost:5000/list/recurring';

  constructor(private http: HttpClient) {
  }

  createTransaction(name: string): Observable<Object> {
    // TODO jolifier le json
    return this.http.post(this.createRecurringTransactionURL, new RecurringTransaction(name), httpOptions).pipe(
      tap(_ => this.created.emit())
    );
  }

  getPossibleRecurringTransactions(): Observable<string[]> {
    return this.http.get<string[]>(this.getRecurringTransactionsURL, httpOptions);
  }
}
