
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
      // console.log( Object.values(data.data) )

    })
    // this.campeonesService.getCampeones()
    //   .subscribe( (campeones: any) => {
    //     console.log( campeones.data );
    //     Object.values(this.);
    //     this.campeones = campeones
    //   })
    // this.getChampions()
  }

  // getChampions(): any {
  //   this.http.get( 'http://ddragon.leagueoflegends.com/cdn/11.23.1/data/en_US/champion.json' )
  //     .subscribe(( champions: any ) => {
  //       console.log(champions)
  //     })
  // }

}
