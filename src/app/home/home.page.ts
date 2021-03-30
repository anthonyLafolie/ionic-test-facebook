import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Platform } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';

@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
})
export class HomePage {

	providerFb: firebase.auth.FacebookAuthProvider;
	constructor(
		public afDB: AngularFireDatabase,
		public afAuth: AngularFireAuth,
		private fb: Facebook,
		public platform: Platform
	) {
	}



	facebookLogin() {
		if (this.platform.is("cordova")) {
			console.log("cordova");
			this.facebookCordova();
		} else {
			console.log("web");
			this.facebookWeb();
		}
	}


	facebookCordova() {
		this.fb.login(['email']).then((response) => {
			const facebookCredential = firebase.auth.FacebookAuthProvider
				.credential(response.authResponse.accessToken);
			firebase.auth().signInWithCredential(facebookCredential)
				.then((success) => {
					console.log('Info Facebook: ' + JSON.stringify(success));
					this.afDB.object('Users/' + success.user.uid).set({
						displayName:success.user.displayName,
						photoURL:success.user.photoURL,
					})
				}).catch((error) => {
					console.log('Erreur: ' + JSON.stringify(error));
				});
		}).catch((error) => { console.log(error); });
	}

	facebookWeb() {
		this.afAuth
			.signInWithPopup(new firebase.auth.FacebookAuthProvider())
			.then((success) => {
				// console.log('Info Facebook: ' + JSON.stringify(success));
				console.log('DisplayName: ' + success.user.displayName);
				console.log('UserId: ' + success.user.uid);
				console.log('PhotoURL: ' + success.user.photoURL);
				this.afDB.object('Users/' + success.user.uid).set({
					displayName: success.user.displayName,
					photoURL: success.user.photoURL,
				})

			}).catch((error) => {
				console.log('Erreur: ' + JSON.stringify(error));
			});
	}

	/* 
		facebook
			this.afAuth
				.signInWithPopup(new firebase.auth.FacebookAuthProvider())
				.then((success) => {
					console.log('Info Facebook: ' + JSON.stringify(success));
				}).catch((error) => {
					console.log('Erreur: ' + JSON.stringify(error));
				});
	*/

}


