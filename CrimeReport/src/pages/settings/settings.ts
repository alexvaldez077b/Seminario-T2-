import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {UsersProvider} from "../../providers/users/users";
import {LoginPage} from "../login/login";
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  currentUser:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public session: UsersProvider, public alert: AlertController ) {
    this.currentUser = session.getUserInfo();
    console.log(this.currentUser);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  logout(){

    console.log("Log out method");
    this.session.logout().subscribe((response)=>{

      if(response){
        this.navCtrl.setRoot(LoginPage);
      }else{

        let alert = this.alert.create({
          title: 'Fail',
          subTitle: "Logout Fail",
          buttons: ['OK']
        });
        alert.present(prompt);

      }

    });

  }


}
