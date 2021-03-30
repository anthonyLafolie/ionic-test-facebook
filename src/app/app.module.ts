import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const firebaseConfig = {
	apiKey: "AIzaSyC_99VqM0Sp7O7gkjl7x02LIkYs7YjG3BQ",
	authDomain: "facebook-test-8cc4f.firebaseapp.com",
	projectId: "facebook-test-8cc4f",
	storageBucket: "facebook-test-8cc4f.appspot.com",
	messagingSenderId: "590164973007",
	appId: "1:590164973007:web:2392ccb6816356647deeba",
	measurementId: "G-19EJ3LFVG8"
};

import { Facebook } from '@ionic-native/facebook/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,   AngularFireModule.initializeApp(firebaseConfig),
	AngularFireDatabaseModule],
  providers: [    Facebook,SplashScreen,StatusBar, 
	{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {

}

