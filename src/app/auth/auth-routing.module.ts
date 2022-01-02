import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistroComponent } from './pages/registro/registro.component';

const rutas: Routes = [


  {
    path:'',
    children:[
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'registro',
        component: RegistroComponent
      },
      {
        path:'**',
        redirectTo: 'login'
      }
    ]
  }
]




@NgModule({
  imports: [
    RouterModule.forChild( rutas )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
