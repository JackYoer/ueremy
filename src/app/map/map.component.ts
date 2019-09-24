import { Component, OnInit } from '@angular/core';

import olMap from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import OSM from 'ol/source/OSM.js';
import XYZ from 'ol/source/XYZ';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map: olMap ;
  view: View;

  constructor() { }

  ngOnInit(): void {
    const osmLayer = new TileLayer({
      source: new OSM()
    });

    const xyzLayer = new TileLayer({
      source: new XYZ({
        url: 'http://tile.osm.org/{z}/{x}/{y}.png'
      })
    });
    this.view = new View({
      center: [-472202, 7530279],
      zoom: 12
    });

    this.map = new olMap({
      target: 'map',
      layers: [
        osmLayer,
        // xyzLayer
      ],
      view: this.view
    }); 
  }

}