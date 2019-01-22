import {EventEmitter, Injectable, Output} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '../../../node_modules/@angular/common/http';
import {Transaction} from '../types/transaction';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class CycleService {

  private cycle = new BehaviorSubject('Jan19');
  private listCycle = 'http://localhost:5000/cycles';

  public currentCycle = this.cycle.asObservable();

  @Output() cycleChanged: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  changeCycle(cycle: string) {
    this.cycle.next(cycle);
    this.cycleChanged.emit();
  }

  getAllCycle(): Observable<string[]> {
    return this.http.get<string[]>(this.listCycle, httpOptions);
  }
}
