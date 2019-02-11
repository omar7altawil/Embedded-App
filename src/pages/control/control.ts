import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';



@IonicPage()
@Component({
  selector: 'page-control',
  templateUrl: 'control.html',
})
export class ControlPage {
  status: AngularFireList<any>;
  led1:boolean;
  led2:boolean;
  motor1:boolean;
  motor2:boolean;
  motor3speed:number;
  led3intensity:number;
  fcounter:number;
  bcounter:number;

  constructor(public afDatabase: AngularFireDatabase, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.fcounter = 0;
    this.bcounter = 0;
    this.led1 = false;
    this.led2 = false;
    this.motor1 = false;
    this.motor2 = false;
    this.motor3speed = 15;
    this.led3intensity = 70;
    this.status = afDatabase.list("data");
  }

  changeLabel(){
    if(this.led1)
      return "On";
    else
      return "Off";
  }

  update(){
      let myControlData = {
        led1:this.led1,
        led2:this.led2,
        motor1:this.motor1,
        motor2:this.motor2,
        motor3speed:this.motor3speed,
        led3intensity:this.led3intensity,
        forwardCounter:this.fcounter,
        backwordCounter:this.bcounter
      };
      this.status.push(myControlData);
  }

  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ControlPage');
  }

}
