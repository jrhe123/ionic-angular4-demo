import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// Services
import { AngularFireAuth } from 'angularfire2/auth';
// Alert service
import { AlertController } from 'ionic-angular';


// Components
import { LoggedinPage } from '../loggedin/loggedin';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-login',
 	templateUrl: 'login.html',
 })
 export class LoginPage {

 	@ViewChild('username') uname;
	@ViewChild('password') password;

 	constructor(
 		public navCtrl: NavController, 
 		public navParams: NavParams,
 		private angularFireAuth: AngularFireAuth,
 		public alertCtrl: AlertController
 	) {  }

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad LoginPage');
 	}

 	alert(message: string){
 		let alert = this.alertCtrl.create({
 			title: 'Success',
 			subTitle: message,
 			buttons: ['OK']
 		});
 		alert.present();
 	}

 	login(){
 		let email = this.uname.value;
 		let password = this.password.value;
 		this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
 			.then(data => {
 				console.log(data);
 				console.log(this.angularFireAuth.auth.currentUser);
 				this.alert('logged In');
 				this.navCtrl.setRoot(LoggedinPage);
 			})
 			.catch(error => {
 				console.log('error: ',error);
 				this.alert('Failed to login');
 			})
 	}

 }
