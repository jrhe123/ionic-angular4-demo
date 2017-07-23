import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


// Services
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoggedinPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

 @Component({
 	selector: 'page-loggedin',
 	templateUrl: 'loggedin.html',
 })
 export class LoggedinPage {

 	email : string;

 	constructor(
 		public navCtrl: NavController, 
 		public navParams: NavParams,
 		private angularFireAuth: AngularFireAuth
 		) { 
 			this.email = this.angularFireAuth.auth.currentUser.email;
 		}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad LoggedinPage');
 	}

 }
