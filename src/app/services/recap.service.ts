import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Recap} from '../types/recap';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RecapService {

  private getRecapURL = PROTOCOL + '://' + SERVER_IP + ':5000/recap?cycle=';

  constructor(private http: HttpClient) { }

  getRecap(cycle: string): Observable<Recap[]> {
    return this.http.get<Recap[]>(this.getRecapURL + cycle, httpOptions);
  }
}
