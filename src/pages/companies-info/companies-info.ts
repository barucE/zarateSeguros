import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompaniesInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-companies-info',
  templateUrl: 'companies-info.html',
})
export class CompaniesInfoPage {
	images = ["./assets/imgs/slides/family.jpg","./assets/imgs/slides/insurance-health.jpg","./assets/imgs/slides/car.jpg","./assets/imgs/slides/hands.jpg","./assets/imgs/slides/money.jpg"]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompaniesInfoPage');
  }

}
