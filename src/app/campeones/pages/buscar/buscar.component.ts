import { Component, OnInit } from '@angular/core';
import { Campeon } from '../../interfaces/campeones.interface';
import { CampeonesService } from '../../services/campeones.service';
;

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  campeones: Campeon[] = [];
  campeonesBuscados: Campeon[] = [];
  campeonSeleccionado!: any;

  constructor( private campeonesService: CampeonesService ) { }

  ngOnInit(): void {
    this.getCampeones();
    
  }

  getCampeones() {
    this.campeonesService.getCampeones().subscribe( (data: any ) => {
      this.campeones = Object.values( data.data )  
      console.log( this.campeones );
    })
  }

  buscando( ){
    console.log( this.termino );
    this.campeonesBuscados = this.campeones.filter(( campeon ) => {
      return campeon.name.toLowerCase().includes( this.termino.toLowerCase() );
    });
    console.log( this.campeonesBuscados );
  }

  seleccionandoCampeon( id: any ) {
    this.campeonesBuscados;
    console.log( this.campeonesBuscados );
    console.log( id );
    this.campeonSeleccionado = this.campeones.find(( campeon ) => campeon.id === id )
  }
  
  

}
