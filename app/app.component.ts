import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<navbar></navbar>
  			<router-outlet></router-outlet>
    		`,
})

export class AppComponent  { 
	ppic_path = '/public/images/profile_pic.jpg';
}
