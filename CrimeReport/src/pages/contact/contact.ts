import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';

import { DetailTrendPage } from '../detail-trend/detail-trend';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild(Content) content: Content;
   single = [
    {
      "name": "Homicidio",
      "value": 8940000
    },
    {
      "name": "Robo casa habitacion",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
    {
      "name": "Homicidio",
      "value": 8940000
    },
    {
      "name": "Robo casa habitacion",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
    {
      "name": "Homicidio",
      "value": 8940000
    },
    {
      "name": "Robo casa habitacion",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    },
    {
      "name": "France",
      "value": 7200000
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
    const width = this.content.getContentDimensions().contentWidth ;
    const state = width >= 320;
    
  
    this.view = [width, 300];
  }

  showTrend(data){
  	//let modal =
    this.navCtrl.push(DetailTrendPage, {data: data});
  }

}
