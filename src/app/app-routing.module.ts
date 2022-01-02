import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';



const rutas: Routes = [
  {
    path:'auth',
    loadChildren: () => import( './auth/auth.module').then( m => m.AuthModule )
  },
  {
    path:'campeones',
    loadChildren: () => import('./campeones/campeones.module').then( m => m.CampeonesModule )
  },
  {
    path:'ERROR',
    component: ErrorPageComponent
  },
  {
    path:'**',
    // component: ErrorPageComponent
    redirectTo: 'ERROR'
  }
]



@NgModule({
  declarations: [],
  imports: [

    RouterModule.forRoot( rutas )

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
