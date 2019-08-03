import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Cycles} from '../types/transaction';
import {HttpClient, HttpHeaders} from '@angular/common/http';

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
  private progressUrl = 'http://localhost:5000/cycle/progress?cycle=';

  constructor(private http: HttpClient) { }

  changeCycle(cycle: string) {
    this.cycle.next(cycle);
  }

  getAllCycle(): Observable<Cycles> {
    return this.http.get<Cycles>(this.listCycleUrl, httpOptions);
  }

  getLocalCycle(cycle: string): Observable<string[]> {
    return this.http.get<string[]>(this.listLocalCycleUrl + cycle, httpOptions);
  }

  getProgress(cycle: string): Observable<number> {
    return this.http.get<number>(this.progressUrl + cycle, httpOptions);
  }
}
