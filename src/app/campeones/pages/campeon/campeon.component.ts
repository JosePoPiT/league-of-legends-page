import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators'
import { CampeonesService } from '../../services/campeones.service';
import { Campeon } from '../../interfaces/campeones.interface';

@Component({
  selector: 'app-campeon',
  templateUrl: './campeon.component.html',
  styles: [`
  img {
    width: 100%;
    border-radius: 5px;
  }
  
  `
  ]
})
export class CampeonComponent implements OnInit {

  
  campeon!: Campeon;
  campeonKey!: string;

  constructor( private activatedRoute: ActivatedRoute,
               private campeonesService: CampeonesService,
               private router: Router ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        tap( ({ champion }) => {
          this.campeonKey = champion;
        }),
        switchMap( ({ champion })  => this.campeonesService.getCampeonPorId( champion ) )
      )
      .subscribe( ({ data }) => {
        this.campeon = data[this.campeonKey].image.full;
        // console.log( data[this.campeonKey].image.full );
        // console.log( data['Ahri'].lore );
      });
  }
  regresar() {
    this.router.navigate(['/campeones/listado'])
  }

}
