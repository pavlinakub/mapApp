import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as L from 'leaflet';
import { Transmitter } from 'src/model/Transmitter';



@Injectable({
  providedIn: 'root'
})
export class MarkerService {

 
  private baseURL = "http://localhost:11111/transmitter";

 
  constructor(private http: HttpClient) {
  }
 
 

 makeTransmitterMarkers(map: L.Map): L.LayerGroup {
  const layer = L.layerGroup();

  this.http.get<Transmitter[]>(this.baseURL).subscribe((res: Transmitter[]) => {
    for (const t of res) {
      const lon = t.souradniceS;
      const lat = t.souradniceN;
      const popupContent = t.name;
      const imagePath = t.imagePath;

      const customIcon = L.icon({
        iconUrl: imagePath,
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      });

      const marker = L.marker([lat, lon], { icon: customIcon });
      marker.bindPopup(popupContent).addTo(layer);
   
    }


    return layer;
  });


  return layer;
}
}


