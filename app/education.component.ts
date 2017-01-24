import { Component, trigger, transition, animate, style} from '@angular/core';

@Component({
  selector: 'education',
  template:`<div class = "intro">
  			    this is education.
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

export class EducationComponent  { 
}
