import { Component } from '@angular/core';


import { FacebookService, InitParams } from 'ngx-facebook'

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private fb: FacebookService) {
	let initParams: InitParams = {
		appId: '261100675732761',
		xfbml: true,
		version: 'v2.8'
	  };
   
	  fb.init(initParams);
  }
}
