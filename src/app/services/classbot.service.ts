import {EventEmitter, Injectable, Output} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';
import {Observable} from 'rxjs';
import {CalendarDay, Classe, Venue} from '../types/classbot';
import {DatePipe} from '@angular/common';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class ClassbotService {

  @Output() bookingChanged: EventEmitter<boolean> = new EventEmitter();

  private classbotVenuesURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/venues';
  private classbotUsersURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/users';
  private classbotCalendarURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/calendar?name=';
  private classbotUpcomingURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/upcoming?name=';
  private classbotLoginURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/login?name=';
  private classbotBookNowURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/book_now?class_id=';
  private classbotBookLaterURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/book_later?class_id=';
  private classbotCancelBookedURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/cancel_booked?class_id=';

  constructor(private http: HttpClient,
              public datePipe: DatePipe) {
  }

  getClassPassVenues(): Observable<Venue[]> {
    return this.http.get<Venue[]>(this.classbotVenuesURL, httpOptions);
  }

  getClassPassUsers(): Observable<string[]> {
    return this.http.get<string[]>(this.classbotUsersURL, httpOptions);
  }

  getClassPassCalendar(name: string, venue_id: string, view_more: boolean): Observable<CalendarDay[]> {
    return this.http.get<CalendarDay[]>(this.classbotCalendarURL + name + '&venue_id=' + venue_id + '&view_more=' + view_more, httpOptions);
  }

  getClassPassUpcoming(name: string, mobile: boolean): Observable<CalendarDay[]> {
    return this.http.get<CalendarDay[]>(this.classbotUpcomingURL + name + '&mobile=' + mobile.toString(), httpOptions);
  }

  loginUser(name: string): Observable<number> {
    return this.http.get<number>(this.classbotLoginURL + name, httpOptions);
  }

  bookNow(classe: Classe, username: string): Observable<boolean> {
    const request_url = this.classbotBookNowURL + classe.id + '&user=' + username + '&class_credits=' + classe.credits.toString();
    return this.http.post<boolean>(request_url, httpOptions).pipe(
      tap(() => this.bookingChanged.emit()));
  }

  bookLater(classe: Classe, username: string): Observable<boolean> {
    // tslint:disable-next-line:max-line-length
    const request_url = this.classbotBookLaterURL + classe.id + '&user=' + username + '&class_date=' + this.datePipe.transform(classe.datetime, 'yyyy-MM-dd');
    return this.http.post<boolean>(request_url, httpOptions).pipe(
      tap(() => this.bookingChanged.emit()));
  }

  cancelBooked(classe: Classe, username: string): Observable<boolean> {
    // tslint:disable-next-line:max-line-length
    const request_url = this.classbotCancelBookedURL + classe.id + '&user=' + username;
    return this.http.post<boolean>(request_url, httpOptions).pipe(
      tap(() => this.bookingChanged.emit()));
  }
}
