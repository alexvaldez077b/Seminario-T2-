import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs'


import 'rxjs/add/operator/map';

import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import {UsersProvider} from "../../providers/users/users";
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loading: any;
  username:string = "alexvaldez077b@gmail.com";
  password:string = "00Killer";

  constructor(public navCtrl: NavController,public alertCtrl: AlertController,public loadingCtrl: LoadingController, public user: UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  login(){

    this.showLoading();

    this.user.login({email: this.username, password: this.password}).subscribe(row => {
      if (row.access) {
        this.loading.dismiss();
        this.navCtrl.setRoot(TabsPage);
      } else {
        this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });

  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  showError(text) {
    this.loading.dismiss();

    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
