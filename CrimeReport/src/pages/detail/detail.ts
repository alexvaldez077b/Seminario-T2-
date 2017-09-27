import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Geolocation } from '@ionic-native/geolocation';

import 'rxjs/add/operator/map';
import {NewsProvider} from "../../providers/news/news";

declare var google;

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  id:any;
  post: any;
  position: any;

  media:any;

  constructor(private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams,public news: NewsProvider) {
  }

  addInfoWindow(marker, content){
    
        let infoWindow = new google.maps.InfoWindow({
          content: content
        });
    
        google.maps.event.addListener(marker, 'click', () => {
          infoWindow.open(this.map, marker);
        });
    
      }

  addMarker(){
    
    
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: new google.maps.LatLng(this.post[0].lat, this.post[0].lng),
          
        });
    
        let content = "<h4> " + this.post[0].name + " </h4>";
    
        this.addInfoWindow(marker, content);
    
    
    
      }

  loadMap(){
    
    
        /* Data points defined as a mixture of WeightedLocation and LatLng objects */
    
        console.log("Position");
        console.log(this.post);
    
        let latLng = new google.maps.LatLng(this.post[0].lat, this.post[0].lng);
    
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

    this.id = this.navParams.get('id');

    
    this.news.DetailNew(this.id).subscribe(row => {
      
            if (row.error) {
              //show error dialog
            } else {

              console.log(row);
              
              this.position = { 'lat': row[0].lat,'lng': row[0].lng};                 
                            
              this.post = row;

              this.news.getMedia(this.id).subscribe(row=>{
                  
                this.media = row;

              }, error =>{

              });

              
                
              
              this.loadMap();
              //moment.tz.setDefault("America/Chihuahua");
            
             

      
            }
      
          },
            error => {
      
            });

    
            
    


    console.log('ionViewDidLoad DetailPage');
  }

  

}
