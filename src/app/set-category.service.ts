import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' })
};

export class CategoryBinding {
  transaction_ids: string;
  category: string;

  constructor(ids, category) {
    this.transaction_ids = ids;
    this.category = category;
  }
}

@Injectable({
  providedIn: 'root'
})
export class SetCategoryService {

  private setCategoryURL = 'http://localhost:5000/categorize';
  binding = new CategoryBinding('1,2,3', '*******');

  constructor(private http: HttpClient) { }

  setCategory(): Observable<Object> {
    return this.http.post(this.setCategoryURL, this.binding, httpOptions);
  }
}
