import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';


declare var google;

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  position: {};
  coords:{};

  constructor(public navCtrl: NavController,private geolocation: Geolocation) {

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

  ngAfterViewInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.position = { 'lat': resp.coords.latitude,'lng': resp.coords.longitude};

      console.log(this.position);

      this.loadMap(resp)
     // resp.coords.latitude
     // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });




	}

  public  addMarker(){


    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.position,
      draggable: true
    });

    let content = "<h4>Location </h4>";

    this.addInfoWindow(marker, content);



    }

  loadMap(resp){


    /* Data points defined as a mixture of WeightedLocation and LatLng objects */
    var heatMapData = [

      new google.maps.LatLng(31.647153699999, -106.4455448),

      new google.maps.LatLng(31.647153699999992, -106.4455448),
      new google.maps.LatLng(31.647153699999993, -106.4455450),
      new google.maps.LatLng(31.647153699999991, -106.4455453),
      new google.maps.LatLng(31.647153699999990, -106.4455441),
      new google.maps.LatLng(31.647153699999990, -106.4455485),
      new google.maps.LatLng(31.647153699999985, -106.4455415),
      new google.maps.LatLng(31.647153699999995, -106.4455448),
      new google.maps.LatLng(31.647153699999970, -106.4455448),
      new google.maps.LatLng(31.647153699999990, -106.4455448),



    ];



    let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatMapData
    });

    heatmap.setMap(this.map);





    /*
    this.addMarker();
    this.addMarker();
    this.addMarker();
    this.addMarker();
    this.addMarker();

    */


  }










}
