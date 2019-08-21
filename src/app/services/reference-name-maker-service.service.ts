import {EventEmitter, Injectable, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {tap} from 'rxjs/operators';
import {PROTOCOL, SERVER_IP} from '../configuration/conf';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ReferenceNameMakerServiceService {

  @Output() referenceCreated: EventEmitter<boolean> = new EventEmitter();

  constructor(private http: HttpClient) { }

  private addReferenceNamesURL = PROTOCOL + '://' + SERVER_IP + ':5000/create/name_ref?id=';

  createReference(formValues: Object, id: string): Observable<Object> {
    return this.http.post(this.addReferenceNamesURL + id, formValues, httpOptions).pipe(
      tap(() => this.referenceCreated.emit() )
    );
  }
}
