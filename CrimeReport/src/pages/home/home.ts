import { Component } from '@angular/core';
import { NavController   } from 'ionic-angular';
import { AddPage } from '../add/add';

import { Http,RequestOptions,Headers   } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  posts:any;
  constructor(public navCtrl: NavController,public http: Http ) {

    /*this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {

        this.posts = data.data.children;

        console.log(this.posts);

    });*/

    let request = this.http.get('http://localhost:8000/attemp/user/password',  ).map(res => res.json()).subscribe(data => {

        this.posts = data;

        console.log(this.posts);

    });

    console.log(request);

  }

  Add(){
  	console.log("Add event");

  	//let modal =
    this.navCtrl.push(AddPage);


  }

}
