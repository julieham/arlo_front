import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CycleService {

  private cycle = new BehaviorSubject('now');
  public currentCycle = this.cycle.asObservable();

  private listCycleUrl = 'http://localhost:5000/list/cycle';
  private listLocalCycleUrl = 'http://localhost:5000/list/local_cycle?cycle=';

  constructor(private http: HttpClient) { }

  changeCycle(cycle: string) {
    this.cycle.next(cycle);
  }

  getAllCycle(): Observable<string[]> {
    return this.http.get<string[]>(this.listCycleUrl, httpOptions);
  }

  getLocalCycle(cycle: string): Observable<string[]> {
    return this.http.get<string[]>(this.listLocalCycleUrl + cycle, httpOptions);
  }
}
