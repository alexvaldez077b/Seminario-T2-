import { Component } from '@angular/core';
import { NavController   } from 'ionic-angular';
import { AddPage } from '../add/add';

import 'rxjs/add/operator/map';

import {UsersProvider} from "../../providers/users/users";
import {NewsProvider} from "../../providers/news/news";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  posts:any;
  constructor(public navCtrl: NavController,public session: UsersProvider, public news: NewsProvider) {

    let currentUser = this.session.showCurrentUser();

    this.news.getNews().subscribe(row => {

      if (row.error) {
        //show error dialog
      } else {
        this.posts = row;

        console.log(this.posts);

      }

    },
      error => {

      });

    console.info("HomePAge User: "+currentUser.name);

  }

  Add(){
  	console.log("Add event");

  	//let modal =
    this.navCtrl.push(AddPage);


  }

}
