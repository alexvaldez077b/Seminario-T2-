import { Component } from '@angular/core';
import { NavController   } from 'ionic-angular';
import { AddPage } from '../add/add';
import { DetailPage } from '../detail/detail';
import { AlertController } from 'ionic-angular';

import 'rxjs/add/operator/map';

//import * as moment from 'moment';
import * as moment from 'moment-timezone';

import {UsersProvider} from "../../providers/users/users";
import {NewsProvider} from "../../providers/news/news";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  posts:any;
  
  constructor(public navCtrl: NavController,public session: UsersProvider, public news: NewsProvider,public alertCtrl: AlertController) {

    

    let now = moment().format('LLLL');
   console.log(now);

    let currentUser = this.session.showCurrentUser();

    this.news.getNews().subscribe(row => {

      if (row.error) {
        //show error dialog
      } else {
        this.posts = row;
        moment.tz.setDefault("America/Chihuahua");
        this.posts.map((val,i)=>{
          
          val.created_at = moment(val.created_at , "YYYYMMDD H:i").fromNow();
          val.at = moment(val.at,"YYYYMMDD H:i ").fromNow();
          
          

          console.log(val.at);
          console.log(val.created_at);

        });


      }

    },
      error => {

      });

    console.info("HomePAge User: "+currentUser.name);

  }

  Details(id){

    this.navCtrl.push(DetailPage, {id: id});
    

  }

  doRefresh(refresher){


    this.news.getNews().subscribe(row => {
      
            if (row.error) {
              //show error dialog
            } else {
              this.posts = row;
      
              this.posts.map((val,i)=>{

                val.created_at = moment(val.created_at , "YYYYMMDD H:i").fromNow();
                val.at = moment(val.at,"YYYYMMDD H:i ").fromNow();    
              });

              refresher.complete();
      
      
            }
      
          },
            error => {
      
            });



  }

  Add(){
  	console.log("Add event");

  	//let modal =
    this.navCtrl.push(AddPage);


  }

  Alert(){

    let confirm = this.alertCtrl.create({
      title: '¿Está seguro de querer alertar este evento?',
      message: 'Por favor alerte solo eventos que usted considere verdaderamente importantes.',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {

            alert('Disagree clicked');
          }
        },
        {
          text: 'Agree',
          handler: () => {



            alert('Agree clicked');
          }
        }
      ]
    });
    confirm.present();

  }

}
