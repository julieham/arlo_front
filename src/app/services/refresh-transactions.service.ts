import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RefreshTransactionsService {

  @Output() refreshed: EventEmitter<boolean> = new EventEmitter();

  private listURL = 'http://localhost:5000/refresh';

  constructor(private http: HttpClient) {
  }

  refreshTransactions(): Observable<Object> {
    return this.http.get(this.listURL, httpOptions).pipe(
      tap(_ => this.refreshed.emit() )
    );
  }
}
