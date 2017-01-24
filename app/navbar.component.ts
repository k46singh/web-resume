import { Component } from '@angular/core';
import { LINKS } from './link';

@Component({
  selector: 'navbar',
  template:`<div class="trigger">
	  			<div class='left'></div>
	  			<div class='nav'>
	  				<navlink *ngFor="let link of links"
				      [link]="link">
				    </navlink>
	  			 </div>
  			 </div>`,
})

export class NavbarComponent  { 
	links = LINKS;

}
