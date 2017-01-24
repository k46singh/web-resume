import { Component, trigger, transition, animate, style} from '@angular/core';
import { company, COMPANIES } from './companies';

@Component({
  selector: 'experience',
  template:`<div class="company" *ngFor="let company of companies">
              <div class='image'>
  			        <img src="{{company.img}}" height="{{company.height}}" width="{{company.width}}"/>
              </div>
              <div class='company__title'>{{company.name}} - <span>{{company.position}}</span></div>
              <ul>
                <li *ngFor= "let statement of company.description">
                  {{statement}}
                </li>
              </ul>
            </div>`,
  host: {
     '[@routeAnimation]': 'true',
     'style': 'display: block;'
   },
   animations: [
        trigger('routeAnimation', [
           transition(":enter", [
          style({ opacity: 0 }),
          animate('2s', style({ opacity: 1}))
        ]),
        transition(":leave", [
          animate('1s', style({ opacity: 0}))
        ])
      ])
   ]
})

export class ExperienceComponent  { 
  companies = COMPANIES;
}
