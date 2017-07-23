import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// Services
import { AngularFireAuth } from 'angularfire2/auth';


/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-register',
 	templateUrl: 'register.html',
 })
 export class RegisterPage {

 	@ViewChild('username') uname;
	@ViewChild('password') password;

 	constructor(
 		public navCtrl: NavController, 
 		public navParams: NavParams,
 		private angularFireAuth: AngularFireAuth
 	) {  }

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad RegisterPage');
 	}

 	register(){
 		let email = this.uname.value;
 		let password = this.password.value;
 		this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
 			.then(data => {
 				console.log(data);
 			})
 			.catch(error => {
 				console.log('err: ', error);
 			});
 	}

 }
