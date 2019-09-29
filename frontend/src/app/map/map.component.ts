import { Component, OnInit } from '@angular/core';

import { MapService } from './map.service';
import { Location } from './location';

import { Map, circle } from 'leaflet';
import { latLng, LatLng, tileLayer, marker, icon } from 'leaflet';

import { CodeArea } from 'open-location-code-typescript';
import { OpenLocationCode } from 'open-location-code-typescript';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  options: any;
  layers: any = [];

  locations: Location[];

  constructor(
    private mapService: MapService,
    layers = [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '' })
    ]) {}

  ngOnInit() {

    this.getLocations();

    this.locations.forEach(element => {
      let coord = OpenLocationCode.decode(element.olc);
        this.layers.push(
          marker([coord.latitudeCenter,coord.longitudeCenter], {
            icon: icon({
              iconSize: [ 25, 41 ],
              iconAnchor: [ 13, 41 ],
              iconUrl: 'leaflet/marker-icon.png',
              shadowUrl: 'leaflet/marker-shadow.png'
            })
          })
        );
    });

    this.options = {
      layers: this.layers,
      zoom: 14,
      center: latLng(44.49418, 11.34675),
    };
  }

  getLocations() {
    this.mapService.getLocations()
      .subscribe(locations => this.locations = locations);
  }

  onMapReady(map: Map) {

    // Prevedo lo spostamento in un metodo di un servizio
    function onLocationFound(e) {
      var radius = e.accuracy;

      marker(e.latlng, {
        icon: icon({
          iconSize: [ 25, 41 ],
          iconAnchor: [ 13, 41 ],
          iconUrl: 'leaflet/marker-icon.png',
          shadowUrl: 'leaflet/marker-shadow.png'
        })
      }).addTo(map);

      circle(e.latlng, radius).addTo(map);
    }

    function onLocationError(e) {
      alert(e.message);
    }
      map.locate({setView: true, maxZoom: 16});   
      map.on('locationfound', onLocationFound);
      map.on('locationerror', onLocationError);
  }

}
