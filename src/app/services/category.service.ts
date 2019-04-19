import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private listCategoriesURL = 'http://localhost:5000/list/category';
  private listAccountsURL = 'http://localhost:5000/list/account';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<string[]> {
    return this.http.get<string[]>(this.listCategoriesURL, httpOptions);
  }

  getAllAccounts(): Observable<string[]> {
    return this.http.get<string[]>(this.listAccountsURL, httpOptions);
  }

}
