import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Slides } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { AboutPage } from "../pages/about/about";
import { CompaniesInfoPage } from "../pages/companies-info/companies-info";
import { CompaniesPage } from "../pages/companies/companies";
import { ContactPage } from "../pages/contact/contact";
import { ProductsPage } from "../pages/products/products";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  @ViewChild(Slides) slides: Slides;
  images = ["https://investorplace.com/wp-content/uploads/2016/10/insurancemsn2.jpg","http://directlineinsurance.ca/wp-content/uploads/2016/09/famins-1.jpg", "https://blog.securenow.in/wp-content/uploads/2017/11/top-up-health-insurance-1-800x445.jpg"]

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Nosotros', component: AboutPage },
      { title: 'Aseguradoras', component: CompaniesPage },
      { title: 'Productos', component: ProductsPage },
      { title: 'Atención a empresas', component: CompaniesInfoPage},
      { title: 'Contacto', component: ContactPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
