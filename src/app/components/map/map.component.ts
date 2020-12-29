import { Component, OnInit } from '@angular/core';
import { GlobalDataSummary } from 'src/app/models/global-data';
import { GlobalStateData } from 'src/app/models/global-state-data';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  loading = true;
  globalData: GlobalStateData[];
  markers = [];
  zoom = 5
  center: google.maps.LatLngLiteral
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 20,
    minZoom: 2,
  }

  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {

    

    this.dataService.getGlobalStateData()
      .subscribe(
        {
          next: (result) => {
            console.log(result); 
             this.globalData = result;
             result.forEach(cs => {
               if (!Number.isNaN(cs.confirmed)) {                
                  this.addMarker(cs.lat, cs.long, cs.state,cs.confirmed,cs.recovered,cs.deaths,cs.active);
                // this.totalActive += cs.active
                // this.totalConfirmed += cs.confirmed
                // this.totalDeaths += cs.deaths
                // this.totalRecovered += cs.active
                
              }
            })                    
          }, 
          complete : ()=>{
            this.loading = false;
          }          
        }
      )

    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    
    
  }

  addMarker(lat:number , long:number,state:string,confirmed:number,recovered:number,deaths:number,active:number) {
    this.markers.push({
      position: {
        lat: lat,
        lng: long,
      },
      label: {
        color: 'red'        
      },
      title: 'State : ' + state +'\r\n Confirmed : ' + confirmed + '\r\n Recoverd : ' + recovered + '\r\n Deaths : ' + deaths + '\r\n Active : ' + active,
      options: {  },
    })
  }

  
  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--
  }

}
