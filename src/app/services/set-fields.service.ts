import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  @Output() unselect: EventEmitter<boolean> = new EventEmitter();

  private setCategoryURL = 'http://localhost:5000/categorize';
  private linkURL = 'http://localhost:5000/link';
  private changeNameURL = 'http://localhost:5000/name';
  private changeCycleURL = 'http://localhost:5000/cycle';

  constructor(private http: HttpClient) { }

  setCategory(ids: string[], category: string): Observable<Object> {
    this.unselect.emit();
    const binding = new FieldsBinding(ids.toString(), category);
    return this.http.post(this.setCategoryURL, binding, httpOptions);
  }

  linkTransactions(ids: string[]): Observable<Object> {
    const binding = new FieldsBinding(ids.toString(), '');
    return this.http.post(this.linkURL, binding, httpOptions);
  }

  changeName(ids: string[], name: string): Observable<Object> {
    const binding = new FieldsBinding(ids.toString(), name);
    return this.http.post(this.changeNameURL, binding, httpOptions);
  }

  changeCycle(ids: string[], cycle: string): Observable<Object> {
    const binding = new FieldsBinding(ids.toString(), cycle);
    return this.http.post(this.changeCycleURL, binding, httpOptions);
  }

}
