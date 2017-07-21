import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { NgGridModule, NgGridItemConfig, NgGridConfig, NgGridItemEvent } from 'angular2-grid';

import { AppComponent } from './app.component';
import { appRoutes } from './routes'
import { NavComponent } from './nav/navbar.component'
import { LoginComponent } from './user/login.component'
import { DashboardContainerComponent } from './dashboard/dashboard-container.component'

@NgModule({
  imports: [ 
    BrowserModule,
    NgGridModule,
    RouterModule.forRoot(appRoutes)
    
  ],
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    DashboardContainerComponent
  
  ],
  providers: [ ],  
  bootstrap: [ AppComponent ]
})
export class AppModule {

}

