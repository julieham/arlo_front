import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class FieldsBinding {
  transaction_ids: string;
  field_value: string;

  constructor(ids, fieldValue) {
    this.transaction_ids = ids;
    this.field_value = fieldValue;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SetFieldsService {

  @Output() transactionsModified: EventEmitter<boolean> = new EventEmitter();

  private setCategoryURL = 'http://localhost:5000/set-fields/category';
  private linkURL = 'http://localhost:5000/set-fields/link';
  private unlinkURL = 'http://localhost:5000/set-fields/unlink';
  private changeNameURL = 'http://localhost:5000/set-fields/name';
  private changeCycleURL = 'http://localhost:5000/set-fields/cycle';

  constructor(private http: HttpClient) { }

  setCategory(ids: string[], category: string): Observable<Object> {
    return this.setFieldOfTransactions(this.setCategoryURL, ids, category);
  }

  linkTransactions(ids: string[]): Observable<Object> {
    return this.setFieldOfTransactions(this.linkURL, ids);
  }

  unlinkTransaction(id: string): Observable<Object> {
    return this.setFieldOfTransaction(this.unlinkURL, id);
  }

  changeName(ids: string[], name: string): Observable<Object> {
    return this.setFieldOfTransactions(this.changeNameURL, ids, name);
  }

  changeCycle(ids: string[], cycle: string): Observable<Object> {
    return this.setFieldOfTransactions(this.changeCycleURL, ids, cycle);
  }

  // Tools

  private setFieldOfTransactions(url: string, ids: string[], fieldValue: string = '') {
    const binding = new FieldsBinding(ids.toString(), fieldValue);
    return this.http.post(url, binding, httpOptions).pipe(
      tap(() => this.transactionsModified.emit())
    );
  }

  private setFieldOfTransaction(url: string, id: string, fieldValue: string = '') {
    const binding = new FieldsBinding(id.toString(), fieldValue);
    return this.http.post(url, binding, httpOptions).pipe(
      tap(() => this.transactionsModified.emit())
    );
  }
}
