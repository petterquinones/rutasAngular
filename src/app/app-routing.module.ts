import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';
import { ErrorpageComponent } from './shared/errorpage/errorpage.component';

const routes: Routes =[
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path:'404',
    component:ErrorpageComponent
  },
  {
    path:'**',
    component:ErrorpageComponent
  }

]


@NgModule({
  imports:[
    RouterModule.forRoot(routes) //Solo hay un solo forRoot en nuestra aplicación
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
