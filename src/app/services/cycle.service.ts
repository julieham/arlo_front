import {EventEmitter, Injectable, Output} from '@angular/core';
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

  @Output() calendarModified: EventEmitter<string> = new EventEmitter();

  private cycle = new BehaviorSubject('now');
  public currentCycle = this.cycle.asObservable();

  private listCycleUrl = PROTOCOL + '://' + SERVER_IP + ':5000/list/cycle';
  private listLocalCycleUrl = PROTOCOL + '://' + SERVER_IP + ':5000/list/local_cycle?cycle=';
  private progressUrl = PROTOCOL + '://' + SERVER_IP + ':5000/cycle/progress?cycle=';
  private cycleCalendarUrl = PROTOCOL + '://' + SERVER_IP + ':5000/cycle/calendar';
  private editCalendarUrl = PROTOCOL + '://' + SERVER_IP + ':5000/edit/calendar';

  constructor(private http: HttpClient) { }

  changeCycle(cycle: string) {
    this.cycle.next(cycle);
  }

  getAllCycle(): Observable<Cycles> {
    return this.http.get<Cycles>(this.listCycleUrl, httpOptions);
  }

  getLocalCycle(cycle: string, long_list: boolean): Observable<string[]> {
    let suffix = cycle;
    if (long_list) {
      suffix = cycle + '&long=true';
    }
    return this.http.get<string[]>(this.listLocalCycleUrl + suffix, httpOptions);
  }

  getProgress(cycle: string): Observable<number> {
    return this.http.get<number>(this.progressUrl + cycle, httpOptions);
  }

  getCycleCalendar(): Observable<any> {
    return this.http.get<number>(this.cycleCalendarUrl, httpOptions);
  }

  editCalendar(dates: string[], cycle: string) {
    const data: any = {'dates': dates, 'cycle': cycle};
    this.http.post(this.editCalendarUrl, <JSON>data, httpOptions).subscribe(() =>
      this.calendarModified.emit());
  }
}
