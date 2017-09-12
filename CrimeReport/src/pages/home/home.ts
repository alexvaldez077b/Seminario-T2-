import { Component } from '@angular/core';
import { NavController   } from 'ionic-angular';
import { AddPage } from '../add/add';

import 'rxjs/add/operator/map';

import {UsersProvider} from "../../providers/users/users";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  posts:any;
  constructor(public navCtrl: NavController,public session: UsersProvider ) {

    let currentUser = this.session.showCurrentUser();

    console.info("HomePAge User: "+currentUser.name);

  }

  Add(){
  	console.log("Add event");

  	//let modal =
    this.navCtrl.push(AddPage);


  }

}
