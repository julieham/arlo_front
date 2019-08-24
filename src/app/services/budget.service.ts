import {Injectable} from '@angular/core';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private editBudgetURL = PROTOCOL + '://' + SERVER_IP + ':5000/edit/budget?cycle=';

  constructor(private http: HttpClient) {
  }

  editBudget(cycle: String, formValues: Object): Observable<Object> {
    return this.http.post(this.editBudgetURL + cycle, formValues, httpOptions);
  }
}
