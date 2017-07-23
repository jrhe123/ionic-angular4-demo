import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';


// Components
import { FirstPage } from '../first/first';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';


// Alert service
import { AlertController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {


	@ViewChild('username') uname;
	@ViewChild('password') password;


	// Inject service in contructor
	constructor(
		public navCtrl: NavController,
		public alertCtrl: AlertController
	) {

	}


	openFirstPage(){
		// Navigate
		this.navCtrl.push(FirstPage);
	}


	signIn(){
		
		if(this.uname.value == 'admin' 
			&& this.password.value == 'admin'){

			let alert = this.alertCtrl.create({
				title: 'Success',
				subTitle: 'You have logged In',
				buttons: ['OK']
			});
			alert.present();
		}
	}


	toLogin(){
		this.navCtrl.push(LoginPage);
	}


	toRegister(){
		this.navCtrl.push(RegisterPage);
	}

}
