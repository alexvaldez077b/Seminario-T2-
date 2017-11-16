import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

import { DetailTrendPage } from '../detail-trend/detail-trend';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild(Content) content: Content;
  datestart = "2017-10-01";
  dateend = "2017-10-20"
  single = [
    {
      "name": "Homicidio",
      "value": 3
    },
    {
      "name": "Robo casa habitacion",
      "value": 15
    },
    {
      "name": "Secuestros",
      "value": 1
    },
    {
      "name": "Robo a transeuntes",
      "value": 300
    },
    {
      "name": "Robo a negocios",
      "value": 42
    },
    {
      "name": "Fraudes",
      "value": 37
    },
    {
      "name": "Daño a propiedad",
      "value": 50
    },
    {
      "name": "Delito contra la salud",
      "value": 325
    },
    {
      "name": "Robo de vehiculo",
      "value": 461
    },
    {
      "name": "tiroteos",
      "value": 9
    },


  ];
  multi: any[];

  view: any[] = [700, 400];

  // options
  showLegend = 0;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;


  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    this.applyDimensions();
    window.addEventListener('resize', () => {
      this.applyDimensions();
    }, false);
  }

  applyDimensions() {
    const width = this.content.getContentDimensions().contentWidth;
    const state = width >= 320;


    this.view = [width, 300];
  }

  showTrend(data) {
    //let modal =
    this.navCtrl.push(DetailTrendPage, { data: data });
  }

}
