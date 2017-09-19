import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage,ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import * as moment from 'moment';
import {NewsProvider} from "../../providers/news/news";

import { Geolocation } from '@ionic-native/geolocation';
declare var google;
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
  @ViewChild('map') mapElement: ElementRef;
  map:any;
  position: {};
  lat = 0;
  lng = 0;

  title = "";
  violento = false;
  description = "";

  date = moment().format();
  eventType: any;

  crimeType: any;
  constructor( public viewCtrl: ViewController,public alertCtrl: AlertController,private geolocation: Geolocation,public news: NewsProvider) {



  }

  addInfoWindow(marker, content){

    this.news.getEventsType().subscribe(row => {

      if (row.error) {
        //show error dialog

      } else {

        this.eventType = row;

        console.log(this.eventType);

      }

    },
      error => {

      });

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'dragend', (event) => {
      console.log(event.latLng.lat() + "::" +event.latLng.lng());

      this.setLL(event.latLng.lat() , event.latLng.lng());
      //infoWindow.open(this.map, marker);
    });

  }

  setLL(lat,lng){
    this.lat = lat;
    this.lng = lng;
    console.log("News Coords: " + this.lat + "::" + this.lng );
  }

  ngAfterViewInit() {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.position = { 'lat': resp.coords.latitude,'lng': resp.coords.longitude};
      //load map

      this.loadMap(this.position);

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



    let latLng = new google.maps.LatLng(resp.lat, resp.lng);

    let mapOptions = {
      center: latLng,
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

    this.addMarker();

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad AddPage');

  }

  save(){

    let alert = this.alertCtrl.create({
                title: 'Parameters!',
                subTitle: 'title:' + this.title + "description:"+ this.description + " "+ this.date + this.violento + this.crimeType,
                buttons: ['OK']
          });
      alert.present();

    //this.viewCtrl.dismiss();
  }

  openCamera(){
  		let alert = this.alertCtrl.create({
      						title: 'camera!',
      						subTitle: 'open camera request!',
      						buttons: ['OK']
    				});
    		alert.present();
  }

}
