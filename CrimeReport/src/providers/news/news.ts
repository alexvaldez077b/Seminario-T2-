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

  constructor(public http: Http) {
    console.log('Hello NewsProvider Provider');
  }

  getNews(){
    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        jQuery.ajax({
            'method': 'get',
            'url': 'http://127.0.0.1:8000/api/getnews',
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

  getmapPoints(){
    return Observable.create(observer => {
      // At this point make a request to your backend to make a real check!
        jQuery.ajax({
            'method': 'get',
            'url': 'http://127.0.0.1:8000/api/getmappoints',
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

}
