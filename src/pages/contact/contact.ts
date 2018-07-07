import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpModule } from '@angular/http';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactPage');
  }
  sendEmail(){
  var http = new XMLHttpRequest();
  var url = 'emailer.php';
  var params = '&name=this.contact.name&phone=this.contact.phone&company=this.contact.company&email=this.contact.email';
  http.open('POST', url, true);

  //Send the proper header information along with the request
  http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  http.onreadystatechange = function() {//Call a function when the state changes.
      if(http.readyState == 4 && http.status == 200) {
          alert(http.responseText);
      }
  }
  http.send(params);
    /*
  	console.log(this.contact);
 	this.http.post(
 			'localhost:8000/email.php', 
 			this.contact,
			{
			  headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT'}
			}
 		); */
  }

}
