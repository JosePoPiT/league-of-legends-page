import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Campeon } from '../../interfaces/campeones.interface';
import { CampeonesService } from '../../services/campeones.service';
;

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.scss']
})
export class BuscarComponent implements OnInit {

  campeones: Campeon[] = [];
  campeonesBuscados: Campeon[] = [];
  randomChampionsCard: Campeon[] = [];
  buscarCampeon!: FormControl;

  campeonSeleccionado!: any;

  constructor( private campeonesService: CampeonesService ) {
    this.buscarCampeon = new FormControl('')
  }

  ngOnInit(): void {
    this.getCampeones();
    this.buscarCampeonObs$();
    
  }

  getCampeones() {
    this.campeonesService.getCampeones().subscribe( (data: any ) => {
      this.campeones = Object.values( data.data )  
      console.log( this.campeones );
      this.pushingRandomChampions();

    })
  };

  buscarCampeonObs$(): void {
    this.buscarCampeon.valueChanges.subscribe((termino) => {
      if(termino.length === 1) {
        this.campeonSeleccionado = undefined;
      }
      this.campeonesBuscados = this.campeones.filter(( campeon ) => {
        return campeon.name.toLowerCase().includes( termino.toLowerCase() );
      });
    });
  }

  seleccionandoCampeon( id: any ) {
    this.campeonesBuscados;
    console.log( this.campeonesBuscados );
    console.log( id );
    this.campeonSeleccionado = this.campeones.find(( campeon ) => campeon.id === id )
    this.buscarCampeon.setValue('');
  }
  
  randomChampions(arrayLength: number): number {
    return Math.floor(Math.random() * arrayLength);
  };

  pushingRandomChampions(): void {
    this.randomChampionsCard = [];
    for(let i = 0; i < 4; i++) {
      let number = this.randomChampions(this.campeones.length)
      this.randomChampionsCard.push(this.campeones[number]);
    }
  };
  

}
