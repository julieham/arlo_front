import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreateTransactionService {

  @Output() created: EventEmitter<boolean> = new EventEmitter();

  private createTransactionURL = 'http://localhost:5000/create/manual';
  private listAccountsURL = 'http://localhost:5000/list/account';

  constructor(private http: HttpClient) { }

  createTransaction(formValues: Object): Observable<Object> {
    return this.http.post(this.createTransactionURL, formValues, httpOptions).pipe(
      tap(() => this.created.emit() )
    );
  }

  getAllAccounts(): Observable<string[]> {
    return this.http.get<string[]>(this.listAccountsURL, httpOptions);
  }




}
