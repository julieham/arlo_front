import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Cycles} from '../types/transaction';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CycleService {

  private cycle = new BehaviorSubject('now');
  public currentCycle = this.cycle.asObservable();

  private listCycleUrl = PROTOCOL + '://' + SERVER_IP + ':5000/list/cycle';
  private listLocalCycleUrl = PROTOCOL + '://' + SERVER_IP + ':5000/list/local_cycle?cycle=';
  private progressUrl = PROTOCOL + '://' + SERVER_IP + ':5000/cycle/progress?cycle=';

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
