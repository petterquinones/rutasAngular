import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const routes:Routes=[
  {
    path:'',
    children:[
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'register',
        component:RegistroComponent
      },
      {
        path:'**',
        redirectTo:'login'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)//Se declaran como rutas hijas porque seran cargadas mediante cargas perezosas.
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
