import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


// Components
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LoggedinPage } from '../pages/loggedin/loggedin';


// Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';


// Firebase
const firebaseAuth = {
  apiKey: "AIzaSyCfiYaWUEh-Pos0AKxiuOGZrH46GH-Xtz4",
  authDomain: "ionic-demo-3da57.firebaseapp.com",
  databaseURL: "https://ionic-demo-3da57.firebaseio.com",
  projectId: "ionic-demo-3da57",
  storageBucket: "ionic-demo-3da57.appspot.com",
  messagingSenderId: "910440053588"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    LoginPage,
    RegisterPage,
    LoggedinPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    LoginPage,
    RegisterPage,
    LoggedinPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
