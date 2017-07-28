import { Routes } from '@angular/router'
import { DashboardContainerComponent } from './dashboard/dashboard-container.component'
import { LoginComponent } from './user/login.component'
import { CreateTaskComponent } from './task/create-task.component'


export const appRoutes:Routes = [


  { path: 'dashboard', component: DashboardContainerComponent } ,
  { path: 'login', component: LoginComponent } ,
  { path: 'createtask', component: CreateTaskComponent } ,
  { path: '', redirectTo:'/login', pathMatch:'full' } 
  

]