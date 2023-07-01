import { Component, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { PolylineService } from './polyline.service';
import { MarkerService } from './marker.service';
import { ControllerService } from './controler.service';

import { CircleMarkerService } from './circleMarkers.service';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
   
  
  
})
export class MapComponent implements AfterViewInit {
  private map: any;
  private markerService: MarkerService;
  private polylineService: PolylineService;
  private controlService:ControllerService;
  private circleMarkerService:CircleMarkerService;
  
  constructor(controlService:ControllerService,markerService: MarkerService, polylineService: PolylineService,circleMarkerService:CircleMarkerService) {
    this.markerService = markerService;
    this.polylineService = polylineService;
    this.controlService=controlService;
    this.circleMarkerService=circleMarkerService;
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [49.7964683, 18.3578419],
      zoom: 13
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.markerService.makeTransmitterMarkers(this.map);
    this.polylineService.makeRoutePolyline(this.map);
    this.controlService.createControlPanel(this.map);
    this.circleMarkerService.makeRouteCircleMarkersGreen(this.map);
    this.circleMarkerService.makeRouteCircleMarkersOrange(this.map);
    this.circleMarkerService.makeRouteCircleMarkersRed(this.map);
    this.circleMarkerService.makeRouteCircleMarkersBlack(this.map);
  }
}
