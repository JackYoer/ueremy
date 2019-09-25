import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  private map: L.Map;

  constructor(private mapService: MapService) {
  }

  createMap(): void {
    this.map = this.mapService.createMap();
    console.log(this.map);
  }

  ngOnInit(): void {
    if (this.map == null) {
    this.createMap();
    }
  }
}