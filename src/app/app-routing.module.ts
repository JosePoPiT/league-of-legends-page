import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const rutas: Routes = [
  {
    path:'campeones',
    loadChildren: () => import('./campeones/campeones.module').then( m => m.CampeonesModule )
  },
  {
    path:'**',
    redirectTo: 'campeones'
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
