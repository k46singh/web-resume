import { Component, trigger, transition, animate, style} from '@angular/core';

@Component({
  selector: 'education',
  template:`<div>
  			    this is education.
  			</div>`,
  host: {
     '[@routeAnimation]': 'true',
     'style': 'display: block; height:80vh; width:100vh; background-color:green'
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

export class EducationComponent  { 
}
