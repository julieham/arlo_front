import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CreateTransactionService {

  private createTransactionURL = 'http://localhost:5000/create';

  constructor(private http: HttpClient) { }

  createTransaction(formValues: Object): Observable<Object> {
    return this.http.post(this.createTransactionURL, formValues, httpOptions);
  }
}
