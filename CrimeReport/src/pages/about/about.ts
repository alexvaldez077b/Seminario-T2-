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



  ngAfterViewInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.loadMap(resp)
     // resp.coords.latitude
     // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });




	}

  loadMap(resp){

    let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    console.log(this.map);

   this.map.addListener('click', function(e) {


          this.addMarker();
          /*console.log(e.ea.x + ' -- ' + e.ea.y);
          var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.DROP,
            position: {'lat': e.ea.x, 'lng': e.ea.y }
          });

          let content = "<h4>Information!</h4>";

          let infoWindow = new google.maps.InfoWindow({
            content: content
          });

          google.maps.event.addListener(marker, 'click', () => {
            infoWindow.open(this.map, marker);
          });*/
      });

      

  }




  addMarker(){

    this.geolocation.getCurrentPosition().then((resp) => {
      this.position = { 'lat': resp.coords.latitude,'lng': resp.coords.longitude};

      console.log(this.position);


    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.position,
      draggable: true
    });

    let content = "<h4>Information!</h4>";

    this.addInfoWindow(marker, content);

  }



  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

}
