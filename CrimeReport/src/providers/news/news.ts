import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


import {Observable} from 'rxjs/Observable';
import jQuery from "jquery";

/*
  Generated class for the NewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class NewsProvider {

  token = '2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI=';
  //url = "https://crime-report-api.000webhostapp.com/api/";
  url = "http://localhost:8000/api/";
  constructor(public http: Http) {
    console.log('Hello NewsProvider Provider');
  }

  getNews(){
    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        jQuery.ajax({
            'method': 'get',
            'url': `${this.url}getnews`,
            'data': { _token: this.token, },
            success: (res)=>{
              let data = JSON.parse(res);
              observer.next(data);
              observer.complete();

            },
            error: (x,y,z)=>{

            }
          });

    });
  }

  getEventsType(){

    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        jQuery.ajax({
            'method': 'get',
            'url': `${this.url}eventTypes`,
            'data': { _token: this.token, },

            success: (res)=>{

              let data = JSON.parse(res);
              observer.next(data);
              observer.complete();

            },
            error: (x,y,z)=>{

            }
          });

    });

  }

  getmapPoints(val){

    var param ;

    switch(val){
      case 0: //today
        param = "getmappointsToday";
        break;
      case 1: //week
        param = "getmappointsWeek";
        break;
      case 2: //month
        param = "getmappointsMonth";
        break;
    }

    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        jQuery.ajax({
            'method': 'get',
            'url': `${this.url}${param}`,
            'data': { _token: this.token, },

            success: (res)=>{

              let data = JSON.parse(res);
              observer.next(data);
              observer.complete();

            },
            error: (x,y,z)=>{

            }
          });

    });

  }

  sendNew(data){

    console.log(data);
    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        jQuery.ajax({
            'method': 'post',
            'url': `${this.url}sendnew`,
            'data': { _token: this.token, data:data },

            success: (res)=>{

              

              let data = JSON.parse(res);
              console.log(data);
              observer.next(data);
              observer.complete();

            },
            error: (x,y,z)=>{
                console.log(x);
                console.log(y);
                console.log(z);
            }
          });

    });

  }

  DetailNew(id){

    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        jQuery.ajax({
            'method': 'get',
            'url': `${this.url}detailnew`,
            'data': { _token: this.token, id:id },

            success: (res)=>{

              let data = JSON.parse(res);
              console.log(data);
              observer.next(data);
              observer.complete();
              
            },
            error: (x,y,z)=>{
                console.log(x);
                console.log(y);
                console.log(z);
            }
          });

    });



  }
  //

  getMedia(id){


    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        jQuery.ajax({
            'method': 'get',
            'url': `${this.url}getmedia`,
            'data': { _token: this.token, id:id },

            success: (res)=>{

              let data = JSON.parse(res);
              console.log(data);
              observer.next(data);
              observer.complete();
              
            },
            error: (x,y,z)=>{
                console.log(x);
                console.log(y);
                console.log(z);
            }
          });

    });



  }

  //


}
