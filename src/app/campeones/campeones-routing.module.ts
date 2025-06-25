import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoComponent } from './pages/listado/listado.component';
import { CampeonComponent } from './pages/campeon/campeon.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { PortadaComponent } from './pages/portada/portada.component';
import { InfoComponent } from './pages/info/info.component';

const rutas: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListadoComponent,
      },
      {
        path: 'portada',
        component: PortadaComponent,
      },
      {
        path: 'buscar',
        component: BuscarComponent,
      },
      {
        path: 'informacion',
        component: InfoComponent,
      },
      {
        path: ':champion',
        component: CampeonComponent,
      },
      {
        path: '',
        redirectTo: 'portada',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: 'portada',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(rutas)],
  exports: [RouterModule],
})
export class CampeonesRoutingModule {}
