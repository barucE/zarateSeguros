import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  images = ["./assets/imgs/slides/family.jpg","./assets/imgs/slides/insurance-health.jpg","./assets/imgs/slides/car.jpg","./assets/imgs/slides/hands.jpg","./assets/imgs/slides/money.jpg"]
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
