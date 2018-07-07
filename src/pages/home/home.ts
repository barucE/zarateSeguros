import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  images = ["https://investorplace.com/wp-content/uploads/2016/10/insurancemsn2.jpg","http://directlineinsurance.ca/wp-content/uploads/2016/09/famins-1.jpg", "https://blog.securenow.in/wp-content/uploads/2017/11/top-up-health-insurance-1-800x445.jpg"]
  header_data:any;
  constructor(public navCtrl: NavController) {
  }
  ionViewDidLoad(){

  	
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
    this.slides.startAutoplay();
  }
}
