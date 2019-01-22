import {EventEmitter, Injectable, Output} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '../../../node_modules/@angular/common/http';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CycleService {

  private cycle = new BehaviorSubject('Jan19');
  public currentCycle = this.cycle.asObservable();

  @Output() cycleChanged: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  changeCycle(cycle: string) {
    this.cycle.next(cycle);
    this.cycleChanged.emit();
  }
}
