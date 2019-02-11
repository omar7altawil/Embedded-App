import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ControlPage } from '../pages/control/control';
import { MonitorPage } from '../pages/monitor/monitor';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDT-G3C1EuVzmMVZL38liYTZgOcpvhydnk",
  authDomain: "iotproject-a8e31.firebaseapp.com",
  databaseURL: "https://iotproject-a8e31.firebaseio.com",
  projectId: "iotproject-a8e31",
  storageBucket: "iotproject-a8e31.appspot.com",
  messagingSenderId: "986287686668"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ControlPage,
    MonitorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ControlPage,
    MonitorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
