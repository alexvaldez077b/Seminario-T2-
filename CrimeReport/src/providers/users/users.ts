import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


import jQuery from "jquery";


/*
  Generated class for the UsersProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
export class User {
  name: string;
  email: string;
  id;
  constructor(id,name: string, email: string) {
    this.id = id;
    this.name = name;
    this.email = email;
  }
}


@Injectable()
export class UsersProvider {
  currentUser: User;
  token = '2e1iX4Cs8VTGx0NCDMtG2pFQ+Yne5iP8Ah8VkVs+9PI=';

  url = "https://crime-report-api.000webhostapp.com/api/";
  //url = "http://localhost:8000/api/";

  constructor(public http: Http) {
    //console.log('Hello authProvider Provider');
  }


  public login(credentials) {
      if (credentials.email === null || credentials.password === null) {
        return Observable.throw("Please insert credentials");
      } else {
        return Observable.create(observer => {
          // At this point make a request to your backend to make a real check!

          jQuery.ajax({
              'method': 'post',
              'url': `${this.url}login`,
              'data': { _token: this.token,
                        username: credentials.email,
                        password: credentials.password },
              success: (res)=>{

                let data = JSON.parse(res);

                

                if(data.access == true){
                  this.currentUser = new User(data.id,data.username, data.email);
                  //console.log(this.currentUser);
                }

                observer.next(data);
                observer.complete();

              },
              error: (x,y,z)=>{
                //console.log(x);
                //console.log(y);
                //console.log(z);
              }
            });


        });
      }
    }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {

      this.currentUser = null;

      observer.next(true);
      observer.complete();
    });
  }

  public showCurrentUser(){
    return this.currentUser;
  }


}
