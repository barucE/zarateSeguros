import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {
	images = ["https://investorplace.com/wp-content/uploads/2016/10/insurancemsn2.jpg","http://directlineinsurance.ca/wp-content/uploads/2016/09/famins-1.jpg", "https://blog.securenow.in/wp-content/uploads/2017/11/top-up-health-insurance-1-800x445.jpg"]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

}
