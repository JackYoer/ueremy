import { Component, OnInit } from '@angular/core';

import olMap from 'ol/Map';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';
import View from 'ol/View';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import XYZ from 'ol/source/XYZ';
import Feature from 'ol/Feature.js';
import Geolocation from 'ol/Geolocation.js';
import {Circle as CircleStyle, Fill, Stroke, Style} from 'ol/style.js';
import Point from 'ol/geom/Point.js';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  map: olMap ;
  view: View;
  geolocation: Geolocation;

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
      center: [0, 0],
      zoom: 2
    });

    this.map = new olMap({
      target: 'map',
      layers: [
        osmLayer,
        // xyzLayer
      ],
      view: this.view
    });

    this.geolocation = new Geolocation({
        // enableHighAccuracy must be set to true to have the heading value.
        trackingOptions: {
          enableHighAccuracy: true
        },
        projection: this.view.getProjection()
      });

      

    var positionFeature = new Feature();
      positionFeature.setStyle(new Style({
        image: new CircleStyle({
          radius: 6,
          fill: new Fill({
            color: '#3399CC'
          }),
          stroke: new Stroke({
            color: '#fff',
            width: 2
          })
        })
      }));

      var accuracyFeature = new Feature();
      this.geolocation.on('change:accuracyGeometry', function() {
        accuracyFeature.setGeometry(this.geolocation.getAccuracyGeometry());
      });

      this.geolocation.on('change:position', function() {
        var coordinates = this.geolocation.getPosition();
        positionFeature.setGeometry(coordinates ?
          new Point(coordinates) : null);
      });

      new VectorLayer({
        map: this.map,
        source: new VectorSource({
          features: [accuracyFeature, positionFeature]
        })
      });
  }

}