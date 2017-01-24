import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RoutingModule } from './routing.module';

import { AppComponent }  from './app.component';

import { NavbarComponent } from './navbar.component';
import { NavlinkComponent } from './navlink.component';

import { ProfileComponent } from './profile.component';
import { EducationComponent } from './education.component';
import { ExperienceComponent } from './experience.component';


@NgModule({
  imports:      [ BrowserModule, RoutingModule ],
  declarations: [ AppComponent, NavbarComponent, NavlinkComponent, ProfileComponent, EducationComponent, ExperienceComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

