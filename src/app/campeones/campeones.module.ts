import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BuscarComponent } from './pages/buscar/buscar.component';
import { CampeonComponent } from './pages/campeon/campeon.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { CampeonesRoutingModule } from './campeones-routing.module';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { CampeonTajertaComponent } from './components/campeon-tajeta/campeon-tarjeta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    BuscarComponent,
    CampeonComponent,
    HomeComponent,
    ListadoComponent,
    CampeonTajertaComponent
    
  ],
  imports: [
    CommonModule,
    CampeonesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CampeonesModule { }
