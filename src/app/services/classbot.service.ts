import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class ClassbotService {

  private classbotLastURL = PROTOCOL + '://' + SERVER_IP + ':5000/classbot';

  constructor(private http: HttpClient) {
  }

  get(): Observable<string> {
    return this.http.get<string>(this.classbotLastURL, httpOptions);
  }
}
