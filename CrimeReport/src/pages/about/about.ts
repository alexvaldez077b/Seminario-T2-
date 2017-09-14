import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Geolocation } from '@ionic-native/geolocation';

import {NewsProvider} from "../../providers/news/news";

declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('map') mapElement: ElementRef;
  maps: string = "today";
  map: any;
  position: {};
  coords:{};

  points: any;

  constructor(public navCtrl: NavController,private geolocation: Geolocation, private news: NewsProvider) {

  }

  /*addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }*/

  ngAfterViewInit() {


    this.news.getmapPoints().subscribe(row => {
      if (row.error) {
          //show error alert
      } else {
          this.points = row;
          console.log(this.points);

          this.geolocation.getCurrentPosition().then((resp) => {
            this.position = { 'lat': resp.coords.latitude,'lng': resp.coords.longitude};

            //console.log(this.position);

            this.loadMap(resp)
           // resp.coords.latitude
           // resp.coords.longitude
          }).catch((error) => {
            console.log('Error getting location', error);
          });

      }
    },
      error => {

      });;

    console.log("this.points = ");
    console.log(this.points);







	}

  /*public  addMarker(){


    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.position,
      draggable: true
    });

    let content = "<h4>Location </h4>";

    this.addInfoWindow(marker, content);



  }*/

  loadMap(resp){


    /* Data points defined as a mixture of WeightedLocation and LatLng objects */

    var heatMapData = this.points.map((value,i)=>{
      return new google.maps.LatLng(value.lat,value.lng);
    });


    console.log(heatMapData);

    let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatMapData
    });

    heatmap.setMap(this.map);
  }










}
