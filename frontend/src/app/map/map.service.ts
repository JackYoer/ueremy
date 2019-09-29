import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/map';

import { Location } from './location';

@Injectable({
  providedIn: 'root'
})
export class MapService {

constructor(
  private http: HttpClient) {}

getLocations(): Observable<Location[]> {

  let apiUrl = 'http://localhost:3000/locations/all';
  return this.http.get<Location[]>(apiUrl)
}

}
