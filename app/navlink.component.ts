import { Component, Input } from '@angular/core';
import { Link } from "./link"


@Component({
  selector: 'navlink',
  template:`<a routerLink="{{link.route}}" routerLinkActive="active">{{link.text}}</a>`,
})

export class NavlinkComponent  { 
	@Input() link: Link;
}
