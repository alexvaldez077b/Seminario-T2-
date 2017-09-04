import { Component } from '@angular/core';
import { IonicPage, NavParams,ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor( public viewCtrl: ViewController,public alertCtrl: AlertController) {

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad AddPage');

  }

  cancel(){
    this.viewCtrl.dismiss();
  }

  openCamera(){
  		let alert = this.alertCtrl.create({
      						title: 'camera!',
      						subTitle: 'open camera request!',
      						buttons: ['OK']
    				});
    		alert.present();
  }

}
