import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyApp } from './app.component';

//location
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';
//photos
import { PhotoLibrary } from '@ionic-native/photo-library';
import { Camera, CameraOptions } from '@ionic-native/camera';
//pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { AddPage } from '../pages/add/add';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SettingsPage } from '../pages/settings/settings';
import { DetailPage } from '../pages/detail/detail';
import { RegisterPage } from '../pages/register/register';
import { DetailTrendPage } from '../pages/detail-trend/detail-trend'; //DetailTrendPage

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//providers
import { UsersProvider } from '../providers/users/users';
import { NewsProvider } from '../providers/news/news';






@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPage,
    DetailTrendPage,
    LoginPage,
    SettingsPage,
    DetailPage,
    RegisterPage
  ],
  imports: [
    BrowserAnimationsModule,
    NgxChartsModule,
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPage,
    DetailTrendPage,
    LoginPage,
    SettingsPage,
    DetailPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    UsersProvider,
    PhotoLibrary,
    NewsProvider,
    Camera
  ]
})
export class AppModule { }
