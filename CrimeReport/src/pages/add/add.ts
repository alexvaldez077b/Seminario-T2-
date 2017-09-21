import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage,ViewController } from 'ionic-angular';

import { ToastController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import * as moment from 'moment';
import {NewsProvider} from "../../providers/news/news";
import { PhotoLibrary } from '@ionic-native/photo-library';

import {UsersProvider} from "../../providers/users/users";

import { LoadingController } from 'ionic-angular';


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
  loading: any;

  position: {};
  lat = 0;
  lng = 0;
 
  title = "";
  violento = false;
  description = "";

  date = moment().format();
  eventType: any;

  user: any;

  crimeType: any;
  constructor(public loadingCtrl: LoadingController, public session: UsersProvider,public toastCtrl: ToastController,private photoLibrary: PhotoLibrary, public viewCtrl: ViewController,public alertCtrl: AlertController,private geolocation: Geolocation,public news: NewsProvider) {
   this.user = session.getUserInfo();
   console.log(this.user);

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

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }


  setLL(lat,lng){
    this.lat = lat;
    this.lng = lng;
    console.log("News Coords: " + this.lat + "::" + this.lng );
  }

  ngAfterViewInit() {

    this.geolocation.getCurrentPosition().then((resp) => {

      this.position = { 'lat': resp.coords.latitude,'lng': resp.coords.longitude};

      this.lat = resp.coords.latitude;
      this.lng = resp.coords.longitude;


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

    if( this.crimeType && this.title != "" && this.description !="" && this.date < moment().format()   ){

        this.showLoading();
        this.news.sendNew( { title: this.title,
                            location:{lat:this.lat,lng:this.lng},
                            user: this.user.id,
                            crime: this.crimeType,
                            includeV: this.violento,
                            date: moment(this.date).format("YYYY-MM-DD H:mm"),
                            description: this.description } ).subscribe(row => {

                                    console.log(row);
                                    if (row.error) {
                                      //show error dialog

                                      this.showToast("Error Request","toast-error");

                                      this.loading.dismiss();
                              
                                    } else {
                                      
                                      //view toast and goto back
                                      if(row.access){
                                        this.showToast("Noticia agregada exitosamente, las personas seran alertadas, gracias por cooperar.","toast-success" );
                                        this.viewCtrl.dismiss();
                                      }

                                      this.loading.dismiss();
                                                                
                                    }
                              
                                  },
                                    error => {
                              
        });
    }else{
      this.showToast('Complete todos los campos por favor o la fecha es incorrecta','toast-error');
      this.loading.dismiss();
    }

    

    //this.viewCtrl.dismiss();
  }

  showToast(Str,Css){

    let toast = this.toastCtrl.create({
      message: Str,
      showCloseButton: true,
      cssClass: Css,
      duration: 3000
    });

    toast.present();

  }

  openCamera(){

    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          library.forEach(function(libraryItem) {
            console.log(libraryItem.id);          // ID of the photo
            console.log(libraryItem.photoURL);    // Cross-platform access to photo
            console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            console.log(libraryItem.fileName);
            console.log(libraryItem.width);
            console.log(libraryItem.height);
            console.log(libraryItem.creationDate);
            console.log(libraryItem.latitude);
            console.log(libraryItem.longitude);
            console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
          });
        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    }).catch(err => console.log('permissions weren\'t granted'));

      let alert = this.alertCtrl.create({
      						title: 'camera!',
      						subTitle: 'open camera request!',
      						buttons: ['OK']
    				});
    		alert.present();
  }

}
