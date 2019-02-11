import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ControlPage } from '../../pages/control/control'
import { MonitorPage } from '../../pages/monitor/monitor'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {

  }

  goToControl()
  {
    this.navCtrl.push(ControlPage);

  }

  goToMonitor()
  {
    this.navCtrl.push(MonitorPage);
  }
}
