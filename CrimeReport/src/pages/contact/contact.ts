import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { DetailTrendPage } from '../detail-trend/detail-trend';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }

  showTrend(data){
  	let modal = this.navCtrl.push(DetailTrendPage, {data: data});
  }

}
