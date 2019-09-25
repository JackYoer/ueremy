import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Position } from './position.model';
import { PositionAdapter } from './position.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private baseUrl = 'http://api.myapp.com/Positions';

  constructor(
    private http: HttpClient,
    private adapter: PositionAdapter,
  ) { }

  list(): Observable<Position[]> {
    const url = `${this.baseUrl}/`;
    return this.http.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.adapter.adapt(item))),
    );
  }
}