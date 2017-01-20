import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent }        from './profile.component';
import { EducationComponent }   from './education.component';
import { ExperienceComponent }  from './experience.component';

const routes: Routes = [
  { path: '', redirectTo: '/profile', pathMatch: 'full' },
  { path: 'profile',  component: ProfileComponent },
  { path: 'education', component: EducationComponent },
  { path: 'experience',     component: ExperienceComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class RoutingModule {}
