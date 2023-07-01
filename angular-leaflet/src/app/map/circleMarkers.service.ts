import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { CircleData } from 'src/model/CircleData';

@Injectable({
    providedIn: 'root'
})
export class CircleMarkerService {
 
 
  private baseURL = "http://localhost:11111/circledata";
  constructor(private http: HttpClient) {
}

makeRouteCircleMarkersGreen(map: L.Map): L.LayerGroup {
  const layer = L.layerGroup(); 
  
  this.http.get<CircleData[]>(this.baseURL).subscribe((circleRoute: CircleData[]) => {
      const circleMarker: L.LatLngTuple[] = [];
      for (const d of circleRoute) {
        if (d.rsrp>-79 ){
          const lon = d.souradniceS;
          const lat = d.souradniceN;
          const popupContent=d.rsrp.toString()+"dBm";
          const circle=L.circleMarker([lat,lon]);
         circle.setStyle({color: "#00FF00"});
          circle.bindPopup(popupContent).addTo(layer);
        }
      }
      return layer;
    });
 

  
  return layer;
}
makeRouteCircleMarkersOrange(map: L.Map): L.LayerGroup {
  const layer = L.layerGroup();
  
  this.http.get<CircleData[]>(this.baseURL).subscribe((circleRoute: CircleData[]) => {
      const circleMarker: L.LatLngTuple[] = [];
      for (const d of circleRoute) {
        if(d.rsrp<-80 && d.rsrp>-90){
          const lon = d.souradniceS;
          const lat = d.souradniceN;
          const popupContent=d.rsrp.toString()+"dBm";
          const circle=L.circleMarker([lat,lon]);
         
         
           circle.setStyle({color: "#D2691E"});
          

              circle.bindPopup(popupContent).addTo(layer)}
        
      }
      return layer;
    });
 

  
  return layer;
}
makeRouteCircleMarkersRed(map: L.Map): L.LayerGroup {
  const layer = L.layerGroup(); 
  
  this.http.get<CircleData[]>(this.baseURL).subscribe((circleRoute:CircleData[]) => {
      const circleMarker: L.LatLngTuple[] = [];
      for (const d of circleRoute) {
        if(d.rsrp<-91 && d.rsrp>-100){
          const lon = d.souradniceS;
          const lat = d.souradniceN;
          const popupContent=d.rsrp.toString()+"dBm";
          const circle=L.circleMarker([lat,lon]);        
          circle.setStyle({color: "red"});
          circle.bindPopup(popupContent).addTo(layer);
        }
      }
      return layer;
    });
 

  
  return layer;
}
makeRouteCircleMarkersBlack(map: L.Map): L.LayerGroup {
  const layer = L.layerGroup();
  
  this.http.get<CircleData[]>(this.baseURL).subscribe((circleRoute: CircleData[]) => {
      const circleMarker: L.LatLngTuple[] = [];
      for (const d of circleRoute) {
        if(d.rsrp<-101 ){
          const lon = d.souradniceS;
          const lat = d.souradniceN;
          const popupContent=d.rsrp.toString()+"dBm";
          const circle=L.circleMarker([lat,lon]);
          circle.setStyle({ color: "black"});
          circle.bindPopup(popupContent).addTo(layer);  }
      }
    });
  return layer;
}
}

