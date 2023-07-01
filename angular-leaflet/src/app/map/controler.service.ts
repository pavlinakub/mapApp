import { Injectable } from '@angular/core';
import { MarkerService } from './marker.service';
import { PolylineService } from './polyline.service';
import * as L from 'leaflet';
import { CircleMarkerService } from './circleMarkers.service';


@Injectable({
  providedIn: 'root'
})
export class ControllerService {
  constructor(
    private markerService: MarkerService,
    private polylineService: PolylineService,
    private circleMarkerService:CircleMarkerService
  ) {}

  createControlPanel(map: L.Map): void {
    const layerControl = L.control.layers(undefined, undefined, { collapsed: false }).addTo(map);
   
    const markers = this.markerService.makeTransmitterMarkers(map);
    const polyline = this.polylineService.makeRoutePolyline(map);
    const circleMarkersG=this.circleMarkerService.makeRouteCircleMarkersGreen(map);
    const circleMarkersO=this.circleMarkerService.makeRouteCircleMarkersOrange(map);
    const circleMarkersR=this.circleMarkerService.makeRouteCircleMarkersRed(map);
    const circleMarkersB=this.circleMarkerService.makeRouteCircleMarkersBlack(map);

    
    layerControl.addOverlay(markers, "Vysilace *");
    layerControl.addOverlay(polyline, "Dosah signalu **<br />SÍLA SIGNÁLU T-MOBILE CZ: <br />");
    layerControl.addOverlay(circleMarkersG,"Velmi dobrá síla signálu (Zelene puntiky) ***");
    layerControl.addOverlay(circleMarkersO,"Dobrá síla signálu( Oranzove puntiky) ***");
    layerControl.addOverlay(circleMarkersR,"Slabá síla signálu(Červene puntiky) ***");
    layerControl.addOverlay(circleMarkersB,"Velmi slabá síla signálnu(Černé puntiky) ***<br / >* Klikni na ikonu pro více informaci o vysílači <br />** Barva trasy určuje, ke kterému vysílači se telefon připojil<br />*** Pro přesnou sílu signálu klikni na kolečko na cestě");
    
    markers.addTo(map);
    polyline.addTo(map);
   // circleMarkersR.addTo(map);
   // circleMarkersO.addTo(map);
    circleMarkersG.addTo(map);
   // circleMarkersB.addTo(map);
  }
}
