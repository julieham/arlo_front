import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {CURRENT_USER, User} from '../types/user';
import {map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(AuthenticationService.getCurrentUserFromLocalStorage());
    this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  private static getCurrentUserFromLocalStorage(): User {
    return JSON.parse(localStorage.getItem(CURRENT_USER));
  }

  login(credentials: Object) {
    return this.http.post<User>('http://localhost:5000/login', credentials, httpOptions).pipe(
      map(user => {
          if (user.token) {
            localStorage.setItem(CURRENT_USER, JSON.stringify(user));
            this.currentUserSubject.next(user);
          }

          return user;
        }
      )
    );
  }

  logout() {
    localStorage.removeItem(CURRENT_USER);
    this.currentUserSubject.next(null);
  }
}
