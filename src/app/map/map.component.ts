import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service';
import * as L from 'leaflet';
import { Map } from 'leaflet';
import { latLng, LatLng, tileLayer } from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  private map: L.Map;
  options: any;
  layers: any;

  constructor(private mapService: MapService) {
  }

  //
  //createMap(): void {
  //  this.map = this.mapService.createMap();
  //

  //removeMap(): void {
  //  this.mapService.removeMap(this.map);
  //}

  ngOnInit(): void {
    /*if (this.map !== undefined && this.map !== null) {
      this.removeMap();
    }*/
    //this.createMap();

    this.options = {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
      ],
      zoom: 15,
      center: latLng(44.500327, 11.324668),
    };
    
  }
}