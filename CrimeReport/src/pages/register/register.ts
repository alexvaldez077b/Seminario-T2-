import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//
import { TabsPage } from '../tabs/tabs'
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {UsersProvider} from "../../providers/users/users";

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  loading: any;
  nombre:string = "";
  email:string = "";
  password:string = "";
  passwordconfirm:string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public loadingCtrl: LoadingController, public user: UsersProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  Registro(){
    this.showLoading();
    if(this.nombre == "" || this.email == "" || this.password == "" || this.passwordconfirm == "" ){
      this.showError("Complete todos los campos por favor!!!");
      return 0;
    }

    if(this.password != this.passwordconfirm){
      this.showError("la contraseña no coincide!!!");
      return 0;
    }

    if(this.email.includes("@") && this.email.includes(".com")  ){
      
      this.user.register({name: this.nombre, email: this.email , password: this.password}).subscribe(row => {
        if (row.access) {

          this.loading.dismiss();
          this.navCtrl.setRoot(TabsPage);
        
        } else {
          this.showError(row.error);
        
        }
      },
        error => {
          this.showError(error);
        });

    }else{
      this.showError("Email incorrecto");
      return 0;
    }




    

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
    alert.present();
  }

}
