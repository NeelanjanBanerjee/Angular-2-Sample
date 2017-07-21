import { Routes } from '@angular/router'
import { DashboardContainerComponent } from './dashboard/dashboard-container.component'


export const appRoutes:Routes = [


  { path: 'dashboard', component: DashboardContainerComponent } ,
  { path: '', redirectTo:'/dashboard' } 
  

]