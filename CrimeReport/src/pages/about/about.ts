import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public geolocation: Geolocation,public googleMaps: GoogleMaps) {

  }


  
  ngAfterViewInit() {
	 this.loadMap();
	}

	loadMap() {
	 // make sure to create following structure in your view.html file
	 // and add a height (for example 100%) to it, else the map won't be visible
	 // <ion-content>
	 //  <div #map id="map" style="height:100%;"></div>
	 // </ion-content>

	 // create a new map by passing HTMLElement
	 let element: HTMLElement = document.getElementById('map');

	 let map: GoogleMap = this.googleMaps.create(element);

	 // listen to MAP_READY event
	 // You must wait for this event to fire before adding something to the map or modifying it in anyway
	 map.one(GoogleMapsEvent.MAP_READY).then(
	   () => {
	     console.log('Map is ready!');
	     // Now you can add elements to the map like the marker
	   }
	 );

	 // create CameraPosition
	 let position: CameraPosition = {
	   target: {
	     lat: 43.0741904,
	     lng: -89.3809802
	   },
	   zoom: 18,
	   tilt: 30
	 };

	 // move the map's camera to position
	 map.moveCamera(position);
/*
	 // create new marker
	 let markerOptions: MarkerOptions = {
	   //position: ionic,
	   title: 'Ionic'
	 };

	 const marker: Marker = map.addMarker(markerOptions)
	   .then((marker: Marker) => {
	      marker.showInfoWindow();
	    });*/
	 }
  

}
