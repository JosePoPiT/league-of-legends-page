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
import { SwiperModule } from 'swiper/angular';
import { PortadaComponent } from './pages/portada/portada.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';




@NgModule({
  declarations: [
    BuscarComponent,
    CampeonComponent,
    HomeComponent,
    ListadoComponent,
    CampeonTajertaComponent,
    PortadaComponent
    
  ],
  imports: [
    CommonModule,
    CampeonesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SwiperModule,
  ]
})
export class CampeonesModule { }
