import { Injectable } from '@angular/core';

import { latLng, LatLng, tileLayer } from 'leaflet';
import * as L from 'leaflet';
import { Map } from 'leaflet';

@Injectable({
  providedIn: 'root',
})
export class MapService {

  options: any;
  layers: any;

  constructor() { }

  removeMap(importMap): void {
    importMap.remove();
  }

  createMap(): Map {

    var map = L.map('map');

    this.options = {
      layers: [
        L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
      ],
      zoom: 15,
      center: latLng(44.500327, 11.324668),
    };

    map.locate({setView: true, maxZoom: 16});

    return map;

  }

}