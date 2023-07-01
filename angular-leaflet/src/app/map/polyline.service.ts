import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { RouteColor } from 'src/model/RouteColor';

@Injectable({
    providedIn: 'root'
})
export class PolylineService {
 
 
  private baseURL = "http://localhost:11111/routecolor";
  constructor(private http: HttpClient) {
}


makeRoutePolyline(map: L.Map): L.LayerGroup {
  const layer = L.layerGroup(); 

  this.http.get<RouteColor[]>(this.baseURL ).subscribe((data: RouteColor[]) => {
   
      const path: L.LatLngTuple[] = [];
      
      for (const d of data) {
          const lon = d.souradnice_s;
          const lat = d.souradnice_n;
         const colorR=d.routeColor
          path.push([lat, lon]);
        }
      
      

     
    for (let i = 0; i < path.length -1; i++) {
       const segment = [path[i], path[i + 1]];
       const colorR = data[i].routeColor.toString();
        const polyline = L.polyline(segment, { color:colorR });
      
        polyline.addTo(layer);   
      }
    });
  

  
  return layer;
}
}

