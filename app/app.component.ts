import { Component } from '@angular/core';
import { NavbarComponent } from './navbar.component';

@Component({
  selector: 'my-app',
  template:`<navbar></navbar>
    		`,
})

export class AppComponent  { 
	ppic_path = '/public/images/profile_pic.jpg';
}
