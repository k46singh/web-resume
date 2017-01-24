import { Component, trigger, state, transition, animate, style} from '@angular/core';

@Component({
  selector: 'profile',
  template:`<div class="profile">
      				<img class="ppic" src="{{ppic_path}}"/>
      				<br/>
      				<div>Karan Singh</div>
      				<br/>
      				<div>Front-End Developer</div>
      				<br/>
      				<div>University of Waterloo</div>
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

export class ProfileComponent  { 
	ppic_path = '/public/images/profile_pic.jpg';
}
