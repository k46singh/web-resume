import { Component, trigger, transition, animate, style} from '@angular/core';

@Component({
  selector: 'experience',
  template: `<div >
  			    this is experience.
  			 </div>`,
  host: {
     '[@routeAnimation]': 'true',
     'style': 'display: block;'
   },
   animations: [
        trigger('routeAnimation', [
           transition(":enter", [
          style({ opacity: 0 }),
          animate('2s 1.5s', style({ opacity: 1}))
        ]),
        transition(":leave", [
          animate('1s', style({ opacity: 0}))
        ])
      ])
   ]
})

export class ExperienceComponent  { 
}
