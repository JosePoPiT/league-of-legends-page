import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { CampeonComponent } from './pages/campeon/campeon.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';

const rutas:  Routes  = [

  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path:'listado',
        component: ListadoComponent
      },
      {
        path:'buscar',
        component: BuscarComponent
      },
      {
        path:':champion',
        component: CampeonComponent
      },
      {
        path:'**',
        redirectTo: 'listado'
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
export class CampeonesRoutingModule { }
