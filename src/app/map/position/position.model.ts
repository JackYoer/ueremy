import { Injectable } from '@angular/core';
import { Adapter } from '././adapter.ts';

export class Position {
  constructor(
    public lat: number,
    public lon: number
  ) { }
}

@Injectable({
    providedIn: 'root'
})

export class PositionAdapter implements Adapter<Position> {
  adapt(item: any): Position {
    return new Position(
      item.lat,
      item.long
    );
  }
}