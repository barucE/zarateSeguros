import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {
	public contact = {
		name: "",
		phone: "",
		company: "",
		email: "",
	}
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.http = http;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  sendEmail(){
    var url = "https://zarateseguros.com/mailer.php";

    var body = JSON.stringify({name: this.contact.name, phone: this.contact.phone, company: this.contact.company, email: this.contact.email});

    this.http.post(url, body)
    .subscribe(data => {
         alert('Correo enviado exitosamente')
    },
         err => {
         console.log("ERROR!: ", err);
         alert(err);
    });
  }

}
