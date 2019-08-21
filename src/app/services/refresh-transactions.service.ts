import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RefreshTransactionsService {

  @Output() refreshed: EventEmitter<boolean> = new EventEmitter();

  private listURL = PROTOCOL + '://' + SERVER_IP + ':5000/refresh';

  constructor(private http: HttpClient) {
  }

  refreshTransactions(): Observable<Object> {
    return this.http.get(this.listURL, httpOptions).pipe(
    tap(_ => this.refreshed.emit() )
    );
  }
}
