import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { NgGridModule, NgGridItemConfig, NgGridConfig, NgGridItemEvent } from 'angular2-grid';

import { AppComponent } from './app.component';
import { appRoutes } from './routes';
import { AuthService } from './services/auth.service';

import {
  LoginComponent
} from './user/index'

import {
  NavComponent
} from './nav/index'

import {
  CreateTaskComponent
} from './task/index'


import {
  DashboardContainerComponent
} from './dashboard/index'

@NgModule({
  imports: [ 
    BrowserModule,
    NgGridModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    DashboardContainerComponent,
    CreateTaskComponent
    
  
  ],
  providers: [ AuthService],  
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

