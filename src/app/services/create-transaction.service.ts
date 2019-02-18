import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
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

  constructor(private http: HttpClient) { }

  createTransaction(formValues: Object): Observable<Object> {
    return this.http.post(this.createTransactionURL, formValues, httpOptions).pipe(
      tap(_ => this.created.emit() )
    );
  }
}
