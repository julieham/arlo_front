import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';
import {Observable} from 'rxjs';
import {AccountStatus} from '../types/accounts';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private n26AuthStatusURL = PROTOCOL + '://' + SERVER_IP + ':5000/state/n26';
  private n26AuthURL = PROTOCOL + '://' + SERVER_IP + ':5000/setup/n26';

  constructor(private http: HttpClient) {
  }

  public getN26AuthStatus(): Observable<AccountStatus> {
    return this.http.get<AccountStatus>(this.n26AuthStatusURL, httpOptions);
  }

  public setupN26_2FA(): Observable<any> {
    return this.http.get<any>(this.n26AuthURL, httpOptions);
  }
}
