import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {CURRENT_USER, User} from '../types/user';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(AuthenticationService.getCurrentUserFromLocalStorage());
    this.currentUserSubject.asObservable();

    console.log('USER : ');
    console.log(this.currentUserSubject.getValue());
  }


  private static getCurrentUserFromLocalStorage(): User {
    return JSON.parse(localStorage.getItem(CURRENT_USER));
  }
}
