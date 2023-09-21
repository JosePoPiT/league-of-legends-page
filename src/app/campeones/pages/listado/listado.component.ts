
import { Component, OnInit } from '@angular/core';
import { CampeonesService } from '../../services/campeones.service';
import { Campeon } from '../../interfaces/campeones.interface';


@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {


  campeones: Campeon[] = [];

  constructor( private campeonesService: CampeonesService) {

 
    
  }
 

  ngOnInit(): void {
    this.campeonesService.getCampeones().subscribe(( data: any ) => {
      this.campeones = Object.values( data.data )
      console.log( this.campeones )

    })
   
}
}
