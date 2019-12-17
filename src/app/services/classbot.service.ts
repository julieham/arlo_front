import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';
import {Observable} from 'rxjs';
import {Classe, Venue} from '../types/classbot';
import {DatePipe} from '@angular/common';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})


export class ClassbotService {
  providers: [DatePipe];

  private classbotVenuesURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/venues';
  private classbotUsersURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/users';
  private classbotScheduleURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/schedule?name=';
  private classbotLoginURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/login?name=';
  private classbotBookNowURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/book_now?class_id=';
  private classbotBookLaterURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot/book_later?class_id=';

  private classPassURL = 'https://classpass.com/_api';

  constructor(private http: HttpClient,
              public datePipe: DatePipe) {
  }

  getClassPassVenues(): Observable<Venue[]> {
    return this.http.get<Venue[]>(this.classbotVenuesURL, httpOptions);
  }

  getClassPassUsers(): Observable<string[]> {
    return this.http.get<string[]>(this.classbotUsersURL, httpOptions);
  }

  getClassPassSchedule(name: string, venue_id: string): Observable<Classe[]> {
    return this.http.get<Classe[]>(this.classbotScheduleURL + name + '&venue_id=' + venue_id, httpOptions);
  }

  getCPSchedule(token: string): Observable<string> {
    const httpTokenOptions = {
      headers: new HttpHeaders({
        'CP-Authorization': 'Token ' + token,
        'Access-Control-Allow-Origin': '*'
      })
    };
    const requestURL = this.classPassURL + '/v1/venues/' + '68654' + '/schedules?date=' + '2019-12-12' + '&upcoming=true';
    console.log(httpTokenOptions.headers);
    return this.http.get<string>(requestURL, httpTokenOptions);
  }

  loginUser(name: string): Observable<string> {
    return this.http.get<string>(this.classbotLoginURL + name, httpOptions);
  }

  bookNow(classe: Classe, username: string): Observable<boolean> {
    const request_url = this.classbotBookNowURL + classe.id + '&user=' + username + '&class_credits=' + classe.credits.toString();
    return this.http.post<boolean>(request_url, httpOptions);
  }

  bookLater(classe: Classe, username: string): Observable<boolean> {
    // tslint:disable-next-line:max-line-length
    const request_url = this.classbotBookLaterURL + classe.id + '&user=' + username + '&class_date=' + this.datePipe.transform(classe.datetime, 'yyyy-MM-dd');
    return this.http.post<boolean>(request_url, httpOptions);
  }
}
