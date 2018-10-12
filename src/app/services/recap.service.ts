import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Observable} from 'rxjs';
import {AccountMetadata} from '../types/accounts';
import {Recap} from '../types/recap';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class RecapService {

  private getRecapURL = 'http://localhost:5000/recap';

  constructor(private http: HttpClient) { }

  getRecap(): Observable<Recap[]> {
    return this.http.get<Recap[]>(this.getRecapURL, httpOptions);
  }
}
