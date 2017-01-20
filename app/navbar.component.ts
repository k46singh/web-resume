import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `<div class=''>
  				<a routerLink="/profile" routerLinkActive="active">Profile</a>
      			<a routerLink="/education" routerLinkActive="active">Education</a>
      			<a routerLink="/experience" routerLinkActive="active">Experience</a>
  			 </div>
  			 <router-outlet></router-outlet>`,
})

export class NavbarComponent  { 
}
